def individual_muscle(muscle) -> dict:
        return {
                "muscle_id": str(muscle["muscle_id"]),
                "monday": muscle["monday"],
                "tuesday": muscle["tuesday"],
                "wednesday": muscle["wednesday"],
                "thursday": muscle["thursday"],
                "friday": muscle["friday"],
                "saturday": muscle["saturday"],
                "sunday": muscle["sunday"]
        }


def muscle_list_serial(muscles) -> list:
        return [individual_muscle(muscle) for muscle in muscles]

def individual_serial(gym) -> dict:
        return {
                "id": str(gym["_id"]),
                # "gym_name": gym["gym_name"],
                # "gym_address": gym["gym_address"],
                # "gym_number": gym["gym_number"],
                # "gym_neighborhood": gym["gym_neighborhood"],
                "muscle": muscle_list_serial(gym["muscle"])
        }


def list_serial(gyms) -> list:
        return [individual_serial(gym) for gym in gyms]


def list_hours(hours) -> list:
        return [hour for hour in hours]

