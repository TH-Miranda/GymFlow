from fastapi import APIRouter
from fastapi import Body
from models.gyms import Gym, RequestGym
from config.database import gymRegisterData
from schema.schemas import list_serial, individual_serial
from bson import ObjectId
import pandas as pd
import numpy as np

router = APIRouter()

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