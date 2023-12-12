from cryptography.fernet import Fernet

def secret_key():
    return "THIS_SHOULD_NOT_BE_IN_YOUR_CODE"

def encrypt_password(password):
    key = secret_key().encode()
    cipher_suite = Fernet(key)
    encrypted_password = cipher_suite.encrypt(password.encode())
    return encrypted_password.decode()

def compare_passwords(user_password, encrypted_password):
    decrypted_password = decrypt_password(encrypted_password)
    return user_password == decrypted_password

def decrypt_password(encrypted_password):
    key = secret_key().encode()
    cipher_suite = Fernet(key)
    decrypted_password = cipher_suite.decrypt(encrypted_password.encode())
    return decrypted_password.decode()
