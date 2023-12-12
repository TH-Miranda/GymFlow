import random

gym_name = ["Planet Fitness",
"Golds Gym",
"Anytime Fitness",
"24 Hour Fitness",
"LA Fitness",
"Snap Fitness",
"Equinox",
"Anytime Gym",
"All time Gym",
"Bio Fitness"]

gym_addresses = ["123 Main Street",
"456 Elm St",
"789 Oak St",
"321 Pine St",
"654 Cedar St",
"987 Maple St",
"234 Birch St",
"567 Spruce St",
"890 Willow St",
"432 Oak St"]

gym_number = [123,
456,
789,
321,
654,
987,
234,
567,
890,
432]


gym_neighborhood = ["Downstown",
"Midtown",
"Uptown",
"Westside",
"Eastside",
"Southtown",
"Northside",
"Downtown",
"Midtown",
"Uptown"]


muscles = ["6546be83e38d228e409ba51e",
"6546be83e38d228e409ba51f", 
"6546be83e38d228e409ba520", 
"6546be83e38d228e409ba521", 
"6546be83e38d228e409ba522", 
"6546be83e38d228e409ba523", 
"6546be83e38d228e409ba524", 
"6546be83e38d228e409ba525", 
"6546be83e38d228e409ba526", 
"6546be83e38d228e409ba527"]

days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
start_time = 6
end_time = 12
gap_minutes = 20

f = open("data.json", "w")

for number in range(10):
    f.write("{\n")
    f.write(f"\"gym_name\": \"{gym_name[number]}\", \n" )
    f.write(f"\"gym_address\": \"{gym_addresses[number]}\", \n" )
    f.write(f"\"gym_number\": \"{gym_number[number]}\", \n")
    f.write(f"\"gym_neighborhood\": \"{gym_neighborhood[number]}\", \n")

    f.write("\"muscle\": [\n")
    for muscle in muscles:
        f.write("\t{\n")
        f.write(f"\t\t\"muscle_id\": ObjectId(\'{muscle}\'),\n")
        
        for day in days:
            f.write(f"\t\t\"{day}\": [")
            num_schedules = (random.randint(1, 6)) * 60 // gap_minutes
            schedules = []

            for _ in range(num_schedules):
                hour = random.randint(start_time, end_time - 1)
                minute = random.choice([0, 20, 40])
                schedule = f"{hour:02d}:{minute:02d}"
                schedules.append(schedule)

            for schedule in range(len(schedules)):
                if schedule == len(schedules) - 1:
                    f.write(f"\"{schedules[schedule]}\"")
                else:
                    f.write(f"\"{schedules[schedule]}\", ")
                
            f.write("]\n")

            if day != days[-1]:
                f.write(", ")
            else:
                f.write(" ")

        if muscle != muscles[-1]:
            f.write("\t},\n")
        else:
            f.write("\t}")

    f.write("]\n")

    if number != 9:
        f.write("},\n\n")
f.write("}")

f.close()