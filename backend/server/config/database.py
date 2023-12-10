import os
from pymongo import MongoClient

from models.auth import UserRegister

# Get the MongoDB URI from the environment variable
mongo_uri = os.environ.get("MONGO_URI")

# Connect to the MongoDB server
client = MongoClient(mongo_uri)

db = client.gymData

gymRegisterData = db["gymRegisterData"]
muscleData = db["muscleData"]

def createUser(newUser: UserRegister) -> bool:
    # Insert a new user in the gymUsers collection
    try:
        gymUsers = db["gymUsers"]
    except:
        print("Error connecting to the database")
        return False

    # check if user already exists
    user = readUser(newUser.email)
    if user:
        print("User already exists")
        raise Exception("User already exists")

    user_dict = vars(newUser)  # Convert UserRegister object to dictionary

    userID = gymUsers.insert_one(user_dict)
    print('Created user with ID: {0}'.format(userID))

    return True

def readUser(email: str) -> UserRegister:
    # Read a user from the gymUsers collection
    gymUsers = db["gymUsers"]
    try:
        user = gymUsers.find_one({"email": email})
        return UserRegister(**user)
    except:
        return False

def updateUser(email: str, newUser: UserRegister) -> bool:
    # Update a user in the gymUsers collection
    gymUsers = db["gymUsers"]
    try:
        # use newUser to update user
        gymUsers.update_one({"email": email}, {"$set": vars(newUser)})
    except:
        print("debug: error updating user")
        return False

def deleteUser(email: str):
    # Delete a user from the gymUsers collection
    gymUsers = db["gymUsers"]
    try:
        gymUsers.delete_one({"email": email})
    except:
        print("Error deleting user")
        return False
