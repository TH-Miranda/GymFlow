from typing import List
from pydantic import BaseModel

class hours(BaseModel):
    day: List[str]

class Muscle(BaseModel):
    muscle_name: str
    monday: List[str]
    tuesday: List[str]
    wednesday: List[str]
    thursday: List[str]
    friday: List[str]
    saturday: List[str]
    sunday: List[str]

class Gym(BaseModel):
    gym_name: str
    gym_address: str
    gym_number_address: int
    gym_neighborhood: str

    muscle: List[Muscle]

class RequestGym(BaseModel):
    day: str
    period: str
    muscleGroup: str

class ScheduleDays(BaseModel):
    monday: List[str]
    tuesday: List[str]
    wednesday: List[str]
    thursday: List[str]
    friday: List[str]
    saturday: List[str]
    sunday: List[str]

class ScheduleTraining(BaseModel):
    gym_name: str
    day: str
    day_period: str
    muscle_group: str
