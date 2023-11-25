def individual_serial(aluno) -> dict:
    return {
        "id": str(aluno["_id"]),
        "name": aluno["name"],
        "last_name": aluno["last_name"],
        "email": aluno["email"],
        "CPF": aluno["CPF"],
        "phone_number": aluno["phone_number"],
        "password": aluno["password"],
        # "sex": aluno["sex"],
        "height": aluno["height"],
        "weight": aluno["weight"]
        # "trainer_day": aluno["treiner_day"]
    }

def list_serial(alunos) -> list:
    return [individual_serial(aluno) for aluno in alunos]