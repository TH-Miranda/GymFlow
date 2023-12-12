import jwt
from pydantic import BaseModel

class Token(BaseModel):
    access_token: str
    refresh_token: str
    grant_type: str

# genereate JWT token
def generate_jwt_token(payload, secret_key):
    token = jwt.encode(payload, secret_key, algorithm='HS256')
    ret = Token(access_token=token, refresh_token=token, grant_type="bearer")
    return ret

def parse_token(token):
    # get string after "Bearer "
    return token.split(" ")[1]

# validate JWT token
def validate_jwt_token(token, secret_key):
    print('debug: token value: ', token)
    token = parse_token(token)
    print('debug: token value after parse: ', token)

    try:
        decoded_token = jwt.decode(token, secret_key, algorithms=['HS256'])
        return decoded_token
    except Exception as e:
        print("Error: ", e)
        raise Exception("Invalid token")
