
---

# 🎬 Movie Ticket Booking System

A full-stack Movie Ticket Booking System built using **FastAPI**, **SQLite**, and **ReactJS**.
This project allows users to view movies, select seats, and book tickets with backend validation and OpenAPI-compliant APIs.

---

##  Features

###  Backend (FastAPI)

* Add movies
* View all movies
* Book seats
* Prevent duplicate seat booking
* Limit max seats per user (5 seats)
* OpenAPI (Swagger UI) support
* Database migrations using Alembic
* Unit testing with Pytest

###  Frontend (ReactJS)

* Display available movies
* Seat selection grid
* Real-time seat availability updates
* Booking form with validation
* API integration using Axios    

###  Database (SQLite)

* Stores movies and bookings
* Enforces data consistency

###  SDK

* Auto-generated Python SDK using OpenAPI Generator CLI

---

##  Project Structure

```
Movie-Ticket-Booking-System/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── routes.py
│   ├── schemas.py
│   ├── requirements.txt
│   ├── alembic/
│   ├── tests/
│   └── env/ (created automatically)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookingForm.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   ├── MovieGrid.jsx
│   │   │   └── SeatGrid.jsx
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── movie_sdk/        # Generated SDK
├── seed_data.sql     # Sample data
├── setupdev.bat      # Setup script
├── runapplication.bat # Run script
├── sdk_test.py
└── README.md
```

---

##  Setup Instructions

### 🔹 Prerequisites

* Python 3.11+
* Node.js (v16+ recommended)
* npm

---

##  1. Setup Project

Run:

```bash
setupdev.bat
```

This will:

* Create Python virtual environment
* Install backend dependencies
* Run database migrations
* Install frontend dependencies

---

##  2. Run Application

```bash
runapplication.bat
```

This will:

* Start FastAPI backend → [http://localhost:8000](http://localhost:8000)
* Start React frontend → [http://localhost:3000](http://localhost:3000)

---

##  API Documentation

Open Swagger UI:

```
http://localhost:8000/docs
```

---

##  API Endpoints

###  Add Movie

```
POST /movies/
```

###  Get Movies

```
GET /movies/
```

###  Book Seat

```
POST /movies/{movie_id}/book
```

###  Delete Movies

```
DELETE /movies/{movie_id}
```

###  Get Booking Details

```
GET /movies/{movie_id}/bookings
```

---

##  Important Edge Cases

*  Cannot book same seat twice
*  Max 5 seats per user per movie
*  Cannot book non-existing movie
*  Real-time seat updates handled via API

---

##  Running Tests

```bash
cd backend
pytest
```

Expected:

```
6 passed
```

---

##  SDK Usage

Generate SDK:

```bash
npm install -g @openapitools/openapi-generator-cli
openapi-generator-cli generate -i http://localhost:8000/openapi.json -g python -o movie_sdk
```

Example usage:

```python
from movie_sdk import ApiClient
from movie_sdk.api.default_api import DefaultApi

client = ApiClient(host="http://localhost:8000")
api = DefaultApi(client)

movies = api.get_movies_movies_get()
print(movies)
```

---

##  Database Schema

### Movies Table

```sql
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT UNIQUE,
    total_seats INT
);
```

### Bookings Table

```sql
CREATE TABLE movie_bookings (
    id INTEGER PRIMARY KEY,
    movie_id INT,
    seat TEXT,
    user_name TEXT
);
```

---

###  No Movies Showing

* Backend auto-seeds movies on startup using seed_data.sql

seed_data.sql
```sql
INSERT INTO movies (title, total_seats) VALUES ('Avengers', 50);
INSERT INTO movies (title, total_seats) VALUES ('Inception', 30);
INSERT INTO movies (title, total_seats) VALUES ('Interstellar', 40);
```
* Or add via Swagger UI

---

###  Port Already in Use

Kill process or change port:

```bash
uvicorn main:app --reload --port 8001
```

---

##  Design Decisions

* Used FastAPI for high performance and OpenAPI support
* SQLite for simplicity and portability
* React for dynamic UI
* Axios for API communication
* Alembic for database migrations
* Backend enforces all critical validations

---

##  Future Improvements

* Authentication system
* Multiple Theatre support
* Payment integration via Razor-pay
* Real-time updates using WebSockets

---

