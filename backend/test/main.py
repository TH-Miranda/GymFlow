from fastapi import FastAPI


description = """ 

## This is my Application created with FastAPI

TODO: Insert a better description here, with the API's purpose, usage and routes.

"""

app = FastAPI(title="GymFlow API", version="0.0.1", description=description)

@app.get("/")
def read_root():
    return {"Hello": "World"}