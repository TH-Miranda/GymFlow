from models.auth import UserRegister
from view.database import db

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
        return user
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