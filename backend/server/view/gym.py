from bson import ObjectId

from view.database import gymRegisterData, muscleData
from view.database import gymRegisterData, muscleData
from schema.schemas import list_serial

def getGyms():
    # Read a gym from the gymRegisterData collection
    try:
        # get all gym_name from gymRegisterData
        gyms = [gym['gym_name'] for gym in gymRegisterData.find({}, {"gym_name": 1})]
        return gyms

    except:
        raise Exception("Error getting gyms")

def scheduleGym(gym_name: str, muscle_group: str):
    muscle_id = None
    try:
        # Get the muscle_id by its name
        muscle_id = muscleData.find_one({"muscle_name": muscle_group}, {"_id": 1})
        print('debug: muscle_id:', muscle_id)
    except:
        print('debug: error getting muscle_id')
        raise Exception("Error getting muscle_id")

    try:
        # Get the day_list for the specified gym and muscle_id
        muscle_id = muscleData.find_one({"muscle_name": muscle_group}, {"_id": 1})
        print('debug muscle_id["_id"]:', muscle_id["_id"])
        # Find the document that matches the gym_name
        gym_document = gymRegisterData.find_one({"gym_name": gym_name})

        if gym_document:
            # Access the muscle array from the document
            muscles = gym_document.get("muscle", [])

            # Iterate through each muscle in the array
            for muscle in muscles:
                print('debug: muscle:', muscle)
                print('debug: muscle["muscle_id"]:', muscle["muscle_id"])
                print('debug: muscle_id', muscle_id['_id'])

                # Check if the muscle has the desired muscle_id
                try:
                    if muscle_id['_id'] == muscle['muscle_id']:
                        # check if muscle['muscle_id'] contains muscle_id
                        print(f"Found matching muscle_id in gym: {gym_name}")
                        # Your additional code for processing the matching muscle goes here

                        # get all fields apart from muscle_id
                        ret = {key: value for key, value in muscle.items() if key != 'muscle_id'}

                        return ret

                except Exception as e:
                    print('debug: error getting muscle_id')
                    print('debug: error: ', e)
                    raise Exception("Error getting muscle_id")
            else:
                print(f"No matching muscle_id found in gym: {gym_name}")
        else:
            print(f"No gym found with name: {gym_name}")

    except:
        print('debug: error getting day_list')
        raise Exception("Error getting day_list")

    return True

from bson import ObjectId

def scheduleTraining(gym_name: str, muscle_group: str, day: str, day_period: str, bestTime: str):
    muscle_id = None
    try:
        # Get the muscle_id by its name
        muscle_id = muscleData.find_one({"muscle_name": muscle_group}, {"_id": 1})
        print('debug: muscle_id:', muscle_id)
    except Exception as e:
        print('debug: error getting muscle_id')
        print('debug: error: ', e)
        raise Exception("Error getting muscle_id")

    try:
        # Find the document that matches the gym_name
        gym_document = gymRegisterData.find_one({"gym_name": gym_name})

        if gym_document:
            # Access the muscle array from the document
            muscles = gym_document.get("muscle", [])

            # Iterate through each muscle in the array
            for muscle in muscles:
                print('debug: muscle:', muscle)
                print('debug: muscle["muscle_id"]:', muscle["muscle_id"])
                print('debug: muscle_id', muscle_id['_id'])

                # Check if the muscle has the desired muscle_id
                try:
                    if muscle_id['_id'] == muscle['muscle_id']:
                        # check if muscle['muscle_id'] contains muscle_id
                        print(f"Found matching muscle_id in gym: {gym_name}")
                        # Your additional code for processing the matching muscle goes here
                        # print('debug: muscle on day: ', muscle[day])

                        # get all fields apart from muscle_id
                        ret = {key: value for key, value in muscle.items() if key != 'muscle_id'}

                        # Append the value to ret array
                        ret[day] = bestTime

                        # Update the gymRegisterData with the modified muscle
                        gymRegisterData.update_one(
                            {"gym_name": gym_name, "muscle.muscle_id": muscle_id['_id']},
                            {"$set": {"muscle.$": ret}}
                        )
                except Exception as e:
                    print('debug: error getting muscle_id')
                    print('debug: error: ', e)
                    raise Exception("Error getting muscle_id")
            else:
                print(f"No matching muscle_id found in gym: {gym_name}")
        else:
            print(f"No gym found with name: {gym_name}")

    except Exception as e:
        print('debug: error getting day_list')
        print('debug: error: ', e)
        raise Exception("Error getting day_list")

    try:
        # append
        pass
    except Exception as e:
        return True
