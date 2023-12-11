import pandas as pd

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

def training_period(day_period: str, data: []) -> []:
    if day_period == "morning":
        # filter values between 6:00 and 12:00
        pass

    elif day_period == "afternoon":
        # filter values between 12:00 and 18:00
        pass

    elif day_period == "night":
        # filter values between 18:00 and 00:00
        pass

# algortithm so get the best time to go to the gym
def algorithm(data, horarios: []) -> str:
    count = 0

    for muscle in gyms[0]["muscle"]:
            if muscle["muscle_id"] == "6546be83e38d228e409ba51e":
                    hours = muscle["tuesday"]


    # Create a DataFrame with hours
    df = pd.DataFrame(hours, columns = ['Hours'])

    print(df)

    # Count the occurrences of each hour
    count = df['Hours'].value_counts().sort_index()

    #print(count["06:20"])

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

    # Create a DataFrame with the time range
    time = pd.DataFrame({'Time': time_range['Time']})

    # Output the DataFrame
    print(time_range['Time'])

    print(time_range)

    min = time_range['Time'][time_range['Count'].idxmin()]

    print(time_range['Time'][time_range['Count'].idxmin()])

    # Algorithm
    for dfHour in count.index:
        horas = f'{dfHour}:00'
        for hour in time_range['Time'].index:
            if str(time_range['Time'][hour]) == horas:
                time_range.loc[[hour], ['Count']] = count[dfHour]
