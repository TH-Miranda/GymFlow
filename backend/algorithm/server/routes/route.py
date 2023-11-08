from fastapi import APIRouter
from models.gyms import Gym
from config.database import gymRegisterData
from schema.schemas import list_serial, individual_serial
from bson import ObjectId
import pprint

router = APIRouter()

@router.get("/")
async def get_gyms():
        # pprint.pprint(gymRegisterData.find_one())
        gyms = list_serial(gymRegisterData.find())
        return gyms