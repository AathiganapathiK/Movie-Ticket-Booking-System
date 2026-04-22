
```
# 🎬 Movie Ticket Booking System

A full-stack movie booking system built using FastAPI, ReactJS, SQLite, and OpenAPI-generated Python SDK.

Features include seat selection, booking restrictions, and API-based interaction.
```

---

## ⚙️ Tech Stack

```md
- Backend: FastAPI, SQLAlchemy, SQLite, Alembic
- Frontend: ReactJS, Axios
- SDK: OpenAPI Generator CLI (Python)
```

---

## 🚀 Setup Instructions

```md
### Step 1: Setup
run setupdev.bat

### Step 2: Run Application
run runapplication.bat
```

---

## 🌐 Access Points

```md
Frontend: http://localhost:3000  
Backend Docs: http://localhost:8000/docs  
OpenAPI JSON: http://localhost:8000/openapi.json
```

---

## 🔌 API Endpoints

```md
POST /movies/ → Add movie  
GET /movies/ → List movies  
POST /movies/{id}/book → Book seat  
GET /movies/{id}/bookings → Get booked seats  
```

---

## 🧠 Business Logic

```md
- Prevent duplicate seat booking  
- Max 5 seats per user per movie  
- Real-time seat availability  
```

---

## 🧩 SDK Usage

```python
from openapi_client import ApiClient, Configuration
from openapi_client.api import default_api
from openapi_client.models.booking_create import BookingCreate

config = Configuration(host="http://localhost:8000")
client = ApiClient(config)
api = default_api.DefaultApi(client)

movies = api.get_movies_movies_get()

booking = BookingCreate(seat="B3", user_name="user")
api.book_seat_movies_movie_id_book_post(
    movie_id=2,
    booking_create=booking
)
```

---

## 🧪 Running Tests

```md
cd backend
pytest
```

---