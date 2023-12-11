import pandas as pd
import numpy as np
from datetime import datetime

'''
algorithm input data sample:
{
    '6:00': 1,
    '6:20': 4,
}
'''

'''
    morning: 6:00 - 12:00
    afternoon: 12:00 - 18:00
    night: 18:00 - 00:00
'''

def filter_time_interval(day_schedule, start_time, end_time):
    # Convert start_time and end_time to datetime objects
    start_datetime = datetime.strptime(start_time, "%H:%M")
    end_datetime = datetime.strptime(end_time, "%H:%M")

    # Convert each time in day_schedule to a datetime object
    day_schedule_datetimes = [datetime.strptime(time, "%H:%M") for time in day_schedule]

    # Filter the intervals
    filtered_intervals = [time.strftime("%H:%M") for time in day_schedule_datetimes if start_datetime <= time <= end_datetime]

    return filtered_intervals

def training_period(day: [], day_period: str) -> []:
    if day_period == "morning":
        # filter values between 6:00 and 12:00
        return filter_time_interval(day, "6:00", "12:00")

    elif day_period == "afternoon":
        # filter values between 12:00 and 18:00
        return filter_time_interval(day, "12:00", "18:00")

    elif day_period == "night":
        # filter values between 18:00 and 00:00
        return filter_time_interval(day, "18:00", "00:00")

# algortithm so get the best time to go to the gym
def algorithm(day: [], day_period: str) -> str:
    # get the training period booked
    training_period_booked = training_period(day, day_period)

    #return day
    #return training_period_booked

    count = 0

    # Create a DataFrame with hours
    df = pd.DataFrame(training_period_booked, columns = ['Hours'])

    print(df)

    # Count the occurrences of each hour
    count = df['Hours'].value_counts().sort_index()

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

    min = time_range['Time'][time_range['Count'].idxmin()]

    # Algorithm
    for dfHour in count.index:
        horas = f'{dfHour}:00'
        for hour in time_range['Time'].index:
            if str(time_range['Time'][hour]) == horas:
                time_range.loc[[hour], ['Count']] = count[dfHour]

    min = time_range['Time'][time_range['Count'].idxmin()]

    return min

