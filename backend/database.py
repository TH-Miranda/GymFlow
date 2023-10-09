from pymongo import MongoClient

client = MongoClient('mongodb+srv://root:root123@gymflow.651vkwr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp')

db = client.alunoData

alunos_collection_name = db['RegisterAlunoData']
