def user_login(email, password) -> bool:
    # Check if the email and password are valid
    if email == "example@example.com" and password == "password123":
        # Perform login logic here
        print("User logged in successfully!")
        return True
    else:
        print("Invalid email or password")
        return False
