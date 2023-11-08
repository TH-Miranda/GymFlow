def muscle_list_serial(muscles) -> list:
        return [muscle for muscle in muscles]

def individual_serial(gym) -> dict:
        return {
                "id": str(gym["_id"]),
                "gym_name": gym["gym_name"],
                "gym_address": gym["gym_address"],
                "gym_number_address": gym["gym_number_address"],
                "gym_neighborhood": gym["gym_neighborhood"],
                "muscle": muscle_list_serial(gym["muscle"])
        }


def list_serial(gyms) -> list:
        return [individual_serial(gym) for gym in gyms]