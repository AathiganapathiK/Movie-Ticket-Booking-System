from fastapi import FastAPI
from database import Base, engine, SessionLocal
from routes import router
from models import Movie
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.include_router(router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "API working"}

@app.on_event("startup")
def seed_data():
    db = SessionLocal()

    if db.query(Movie).count() == 0:
        movies = [
            Movie(title="Avengers", total_seats=50),
            Movie(title="Inception", total_seats=40),
            Movie(title="Interstellar", total_seats=30),
        ]
        db.add_all(movies)
        db.commit()

    db.close()