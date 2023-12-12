from view.user import createUser

from models.auth import UserRegister

def register_user(user: UserRegister) -> bool:
    return createUser(user)
