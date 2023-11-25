import pytest 
from fastapi.testclient import TestClient
from httpx import AsyncClient

from server import app

client = TestClient(app)

def test_path_operation():
    response = client.get("/")
    assert response.status_code == 200, response.text

def test_path_find_operation():
    response = client.get("/Wallace")
    assert response.status_code == 200, response.text

