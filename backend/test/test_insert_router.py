import pytest 
from fastapi.testclient import TestClient
from httpx import AsyncClient

from server import app

client = TestClient(app)

def test_write_read_operation():
    note = {"name": "Lucas",
        "last_name": "Silva",
        "email": "lucas@gmail.com",
        "CPF": "98765432111",
        "phone_number": "(12) 93333-6666",
        "password": "lucas123",
        "height": "80",
        "weight": "180"}
    response = client.post("/register/", json=note)
    assert response.status_code == 200, response.text


