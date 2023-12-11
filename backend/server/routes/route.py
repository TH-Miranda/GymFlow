from fastapi import APIRouter, HTTPException
from fastapi import Body, Depends, Request
from bson import ObjectId
import pandas as pd
import numpy as np

from auth.login import user_login
from auth.register import register_user
from auth.token import validate_jwt_token
from auth.utils import secret_key
from models.auth import UserLogin, UserRegister
from models.gyms import Gym, RequestGym
from models.user import UserProfile, UserPasswordUpdate
from schema.schemas import list_serial, individual_serial
from view.gym import getGyms
from view.user import readUser, updateUser

async def auth_middleware(request: Request):
    # if url has /api/v1/auth/ prefix, then skip auth middleware
    if request.url.path.startswith("/api/v1/auth/"):
        return

    token = request.headers.get("Authorization")
    if not token:
        print('debug: no token')
        raise HTTPException(status_code=401, detail="Unauthorized")

    try:
        decoded_token = validate_jwt_token(token, secret_key=secret_key())
        print('debug: token validated')
        print('debug: token decoded: ', decoded_token)

    except Exception as e:
        print('debug: invalid token')
        raise HTTPException(status_code=401, detail="Unauthorized")

router = APIRouter(prefix="/api/v1", dependencies=[Depends(auth_middleware)])

@router.post("/auth/login")
async def login(user: UserLogin):
    try:
        token = user_login(user.email, user.password)
        return token
    except Exception as e:
        print("Error: ", e)
        raise HTTPException(status_code=401, detail="Unauthorized")

@router.post("/auth/register")
async def register(user: UserRegister):
    if register_user(user):
        return {"message": "User registered successfully"}
    else:
        # TODO: Return a more specific error message
        raise HTTPException(status_code=400, detail="User already exists")

@router.get("/user/profile")
async def get_profile(request: Request):
    # get email from token
    token = request.headers.get("Authorization")
    decoded_token = validate_jwt_token(token, secret_key=secret_key())
    decoded_token_email = decoded_token["email"]

    # get user from database
    user = readUser(decoded_token_email)
    print('debug: user: ', user)

    try:
        # convert userRegister object to UserProfile object
        user_profile = UserProfile(**user)
    except Exception as e:
        print("Error: ", e)
        raise HTTPException(status_code=400, detail="Error getting user profile")

    return user_profile

@router.put("/user/profile")
async def set_profile(request: Request, user: UserProfile):
    # get email from token
    token = request.headers.get("Authorization")
    decoded_token = validate_jwt_token(token, secret_key=secret_key())
    decoded_token_email = decoded_token["email"]

    # get user from database
    try:
        updateUser(decoded_token_email, user)
        print("User updated successfully")
    except:
        raise HTTPException(status_code=400, detail="Error updating user")

    return {"message": "Profile updated successfully"}

@router.put("/user/password")
async def set_password(request: Request, user_password: UserPasswordUpdate):
    # get email from token
    token = request.headers.get("Authorization")
    decoded_token = validate_jwt_token(token, secret_key=secret_key())
    decoded_token_email = decoded_token["email"]

    # validate current password
    user = readUser(decoded_token_email)
    if user.password != user_password.current_password:
        raise HTTPException(status_code=400, detail="Incorrect password")

    # update password
    user.password = user_password.new_password
    try:
        updateUser(decoded_token_email, user)
        print("Password updated successfully")
    except:
        raise HTTPException(status_code=400, detail="Error updating password")

    return {"message": "Profile page"}

@router.post("/auth/token/refresh")
async def refresh_token(user: str = Body(...), password: str = Body(...)):
    return {"user": user, "password": password}

@router.post("/schedule")
async def schedule_date(gym_name: str, day: str, day_period: str, muscle_group: str):
    from utils.algorithm import algorithm
    # TODO: get all hours from datbase given the gym_name, day, day_period and muscle_group
    from view.gym import scheduleGym
    schedule = scheduleGym(gym_name, muscle_group)
    schedule_day = schedule[day]

    # TODO: use the algorithm to get the best time to go to the gym
    bestTime = algorithm(schedule_day, day_period)
    # convert bestTime to string
    bestTime = str(bestTime)

    return bestTime

    # TODO: save the best time to go to the gym in the database
    try:
        from view.gym import scheduleTraining
        scheduleTraining(gym_name, muscle_group, day, day_period, bestTime)
        return {"message": "Schedule saved successfully"}
    except Exception as e:
        print('debug: error saving schedule')
        print('debug: error: ', e)
        raise HTTPException(status_code=400, detail="Error saving schedule")

@router.get("/schedule")
async def get_schedule(gym_name: str, muscle_group: str):
    try:
        from view.gym import scheduleGym
        schedule = scheduleGym(gym_name, muscle_group)
        from models.gyms import ScheduleDays
        ret = ScheduleDays(**schedule)
    except Exception as e:
        print('debug: error getting schedule')
        print('debug: error: ', e)
        raise HTTPException(status_code=400, detail="Error getting schedule")
    
    return ret

@router.get("/gyms")
async def get_gyms():
    try:
        gyms = getGyms()
    except:
        print('debug: error getting gyms')
        raise HTTPException(status_code=400, detail="Error getting gyms")
    
    return gyms

# TODO: implement /api/v1/gym endpoint
'''
@router.gpost("gym")
async def gym(request: Request):
    return "Gym page"
'''
