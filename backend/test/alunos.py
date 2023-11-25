from pydantic import BaseModel

class Aluno(BaseModel):
    _id: int
    name: str
    last_name: str
    email: str
    CPF: str
    phone_number: str
    password: str
    # sex: str
    height: float
    weight: float
    # trainer_day: str

class AlunoIn(BaseModel):
    name: str
    last_name: str
    email: str
    CPF: str
    phone_number: str
    password: str
    # sex: str
    height: float
    weight: float
    # trainer_day: str