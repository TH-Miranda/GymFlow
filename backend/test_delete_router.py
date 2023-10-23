import pytest 
from fastapi.testclient import TestClient
from httpx import AsyncClient

from server import app

client = TestClient(app)

def test_delete_operation():
    response = client.get("/delete-aluno/Lucas")
    assert response.status_code == 200, response.text