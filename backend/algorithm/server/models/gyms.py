from typing import List
from pydantic import BaseModel

class Muscle(BaseModel):
        muscle_id: int 
        monday: List[str]
        tuesday: List[str]
        wednesday: List[str]
        thursday: List[str]
        friday: List[str]
        saturday: List[str]
        sunday: List[str]


class Gym(BaseModel):
        _id: int
        gym_name: str
        gym_address: str
        gym_number_address: int
        gym_neighborhood: str

        muscle: List[Muscle]
