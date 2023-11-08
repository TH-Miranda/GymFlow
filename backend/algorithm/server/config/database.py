from pymongo import MongoClient

client = MongoClient("mongodb+srv://root:root123@gymflow.651vkwr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")

db = client.gymData

gymRegisterData = db["gymRegisterData"]
muscleData = db["muscleData"]