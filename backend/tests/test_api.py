import pytest
from fastapi.testclient import TestClient
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from main import app

client = TestClient(app)


#  Add Movie
def test_add_movie():
    response = client.post("/movies/", json={
        "title": "Test Movie",
        "total_seats": 10
    })
    assert response.status_code == 200
    assert response.json()["title"] == "Test Movie"


#  Get Movies
def test_get_movies():
    response = client.get("/movies/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


#  Successful Booking
def test_book_seat_success():
    # create movie first
    movie = client.post("/movies/", json={
        "title": "Booking Movie",
        "total_seats": 10
    }).json()

    response = client.post(f"/movies/{movie['id']}/book", json={
        "seat": "A1",
        "user_name": "test_user"
    })

    assert response.status_code == 200
    assert "Seat booked" in response.json()["message"]


#  Duplicate Seat Booking
def test_duplicate_seat_booking():
    movie = client.post("/movies/", json={
        "title": "Duplicate Movie",
        "total_seats": 10
    }).json()

    # first booking
    client.post(f"/movies/{movie['id']}/book", json={
        "seat": "A1",
        "user_name": "user1"
    })

    # duplicate booking
    response = client.post(f"/movies/{movie['id']}/book", json={
        "seat": "A1",
        "user_name": "user2"
    })

    assert response.status_code == 400
    assert "already booked" in response.json()["detail"]


#  Max Seats Per User
def test_max_seats_limit():
    movie = client.post("/movies/", json={
        "title": "Limit Movie",
        "total_seats": 10
    }).json()

    # book 5 seats (max allowed)
    for seat in ["A1", "A2", "A3", "A4", "A5"]:
        client.post(f"/movies/{movie['id']}/book", json={
            "seat": seat,
            "user_name": "same_user"
        })

    # attempt 6th seat
    response = client.post(f"/movies/{movie['id']}/book", json={
        "seat": "A6",
        "user_name": "same_user"
    })

    assert response.status_code == 400
    assert "max" in response.json()["detail"].lower()


#  Invalid Movie ID
def test_invalid_movie():
    response = client.post("/movies/9999/book", json={
        "seat": "A1",
        "user_name": "test"
    })

    assert response.status_code in [400, 404]