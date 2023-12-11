import os
from pymongo import MongoClient

# Get the MongoDB URI from the environment variable
mongo_uri = os.environ.get("MONGO_URI")

# Connect to the MongoDB server
client = MongoClient(mongo_uri)

db = client.gymData

gymRegisterData = db["gymRegisterData"]
muscleData = db["muscleData"]
