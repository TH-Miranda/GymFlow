from fastapi import APIRouter
from alunos import Aluno, AlunoIn
from database import alunos_collection_name
from schemas import list_serial, individual_serial
from bson import ObjectId

router = APIRouter()

@router.get("/")
async def get_alunos():
    alunos = list_serial(alunos_collection_name.find())
    return alunos

@router.get("/{name}")
async def get_aluno(name: str):
    name = ' '.join(list(map(lambda w: w.capitalize(), name.split("-"))))
    aluno = list_serial(alunos_collection_name.find({"name": name}))
    return aluno

@router.post("/register/", response_model=AlunoIn)
async def register(note: AlunoIn):
    query = note.dict()
    alunos_collection_name.insert_one(query)
    return individual_serial(query)

@router.delete("/delete-aluno/{name}")
async def delete_aluno(name: str):
    result = alunos_collection_name.delete_one({"name": name})
    return result
