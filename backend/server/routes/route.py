from fastapi import APIRouter, HTTPException
from fastapi import Body, Depends, Request
from models.gyms import Gym, RequestGym
from config.database import gymRegisterData
from schema.schemas import list_serial, individual_serial
from bson import ObjectId
import pandas as pd
import numpy as np

from models.auth import UserLogin, UserRegister
from auth.login import user_login
from auth.register import register_user
from auth.token import validate_jwt_token
from auth.utils import secret_key

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

        return
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

@router.post("/auth/token/refresh")
async def refresh_token(user: str = Body(...), password: str = Body(...)):
    return {"user": user, "password": password}

@router.get("/aluno")
async def get_gyms():
    gyms = list_serial(gymRegisterData.find({"_id": ObjectId('655170c2ca2b21d600003d97'), "muscle.muscle_id": ObjectId('6546be83e38d228e409ba51e')}, {"_id": 1, "muscle": 1}))

    # o algoritmo vai utilizar dos horarios do periodo requisitado para o musculo requisitado
    # para isso eh necessario utilizar os dados do frontend

    count = 0

    for muscle in gyms[0]["muscle"]:
            if muscle["muscle_id"] == "6546be83e38d228e409ba51e":
                    hours = muscle["tuesday"]


    # Create a DataFrame with hours
    df = pd.DataFrame(hours, columns = ['Hours']) 

    print(df)

    # Count the occurrences of each hour
    count = df['Hours'].value_counts().sort_index()

    print(count["06:20"])

    # Create an empty DataFrame
    time_range = pd.DataFrame()

    # Create a DatetimeIndex with the desired range
    time_range['date'] = pd.date_range(start='6:00', end='12:00', freq='20min')

    # Create a time column from the 'date' column
    time_range['Time'] = time_range['date'].dt.time

    # Create the 'Count' column
    time_range['Count'] = pd.DataFrame(data=count).notnull()

    # Replace NaN values with 0
    time_range['Count'] = time_range['Count'].replace(np.nan, 0)
    
    # Algorithm
    for dfHour in count.index:
        horas = f'{dfHour}:00'
        for hour in time_range['Time'].index:
            if str(time_range['Time'][hour]) == horas:
                time_range.loc[[hour], ['Count']] = count[dfHour]

    # Create a DataFrame with the time range
    time = pd.DataFrame({'Time': time_range['Time']})

    # Output the DataFrame
    print(time_range['Time'])

    print(time_range)

    min = time_range['Time'][time_range['Count'].idxmin()]

    print(time_range['Time'][time_range['Count'].idxmin()])

    return count.to_json()

@router.post("/horas/", response_model = RequestGym)
async def post_gyms(note: RequestGym):
    print(note.dict())
    return note.dict()
