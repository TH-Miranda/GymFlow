#from models import UserLogin
#from config import db
import jwt

from auth.token import generate_jwt_token, Token
from models.auth import UserLogin
from config.database import readUser
from auth.utils import secret_key

def validate_user(user: UserLogin) -> bool:
    # get user from database
    user = readUser(user.email)
    if user:
        # check if password is correct
        if user["password"] == user.password:
            return True
        else:
            return False

    return False

def user_login(email, password) -> bool:
    # check if user exists in database
    user = readUser(email)

    if user:
        # check if password is correct
        if user.password == password:
            try:
                token = generate_jwt_token({"email": email}, secret_key=secret_key())
            except Exception as e:
                print("Error: ", e)
                raise Exception("Internal error")
            print("token generated: ", token)

            return token

    print("Invalid email or password")
    raise Exception("Invalid email or password")
