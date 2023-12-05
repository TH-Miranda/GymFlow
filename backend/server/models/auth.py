from pydantic import BaseModel

class UserLogin(BaseModel):
    email: str
    password: str

class UserRegister(BaseModel):
    # login information
    email: str
    password: str

    # personal information
    first_name: str
    second_name: str

    # additional information
    height: float
    weight: float
    age: int
    gender: str
