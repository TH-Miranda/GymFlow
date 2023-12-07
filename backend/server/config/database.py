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

    user_dict = vars(newUser)  # Convert UserRegister object to dictionary

    userID = gymUsers.insert_one(user_dict)
    print('Created user with ID: {0}'.format(userID))

    return True

def readUser():
    # Read a user from the gymUsers collection
    gymUsers = db["gymUsers"]
    user = gymUsers.find_one({"name": "John Doe"})
    print(user)

def updateUser():
    # Update a user in the gymUsers collection
    gymUsers = db["gymUsers"]
    gymUsers.update_one({"name": "John Doe"}, {"$set": {"age": 26}})

def deleteUser():
    # Delete a user from the gymUsers collection
    gymUsers = db["gymUsers"]
    gymUsers.delete_one({"name": "John Doe"})

