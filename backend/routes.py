
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas import MovieCreate,BookingCreate
from database import get_db
import models
from models import Movie,Booking

router = APIRouter()

@router.get("/test")
def test():
    return {"msg": "routes working"}

@router.post("/movies/")#Add Movie
def create_movie(movie: MovieCreate, db: Session = Depends(get_db)):
    new_movie = Movie(**movie.dict())
    db.add(new_movie)
    db.commit()
    db.refresh(new_movie)
    return new_movie
@router.delete("/movies/{movie_id}")
def delete_movie(movie_id: int, db: Session = Depends(get_db)):
    movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()

    if not movie:
        raise HTTPException(status_code=404, detail="Movie not found")

    # 🔴 Important: delete related bookings first
    db.query(models.Booking).filter(
        models.Booking.movie_id == movie_id
    ).delete()

    db.delete(movie)
    db.commit()

    return {"message": "Movie deleted successfully"}


@router.get("/movies/")
def get_movies(db: Session = Depends(get_db)):
    movies = db.query(models.Movie).all()

    result = []
    for m in movies:
        booked_count = db.query(models.Booking).filter(
            models.Booking.movie_id == m.id
        ).count()

        result.append({
            "id": m.id,
            "title": m.title,
            "total_seats": m.total_seats,
            "booked_count": booked_count,
            "available_seats": m.total_seats - booked_count
        })

    return result

@router.get("/movies/{movie_id}/bookings")
def get_bookings(movie_id: int, db: Session = Depends(get_db)):
    bookings = db.query(models.Booking).filter(
        models.Booking.movie_id == movie_id
    ).all()

    # return only seat names
    return [b.seat for b in bookings]

@router.post("/movies/{movie_id}/book") # Bookeat
def book_seat(movie_id: int, booking: BookingCreate, db: Session = Depends(get_db)):

    existing = db.query(Booking).filter(
        Booking.movie_id == movie_id,
        Booking.seat == booking.seat
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Seat already booked"
        )

    count = db.query(Booking).filter(
        Booking.movie_id == movie_id,
        Booking.user_name == booking.user_name
    ).count()

    if count >= 5:
        raise HTTPException(status_code=400, detail="Max 3 seats allowed")

    new_booking = Booking(
        movie_id=movie_id,
        seat=booking.seat,
        user_name=booking.user_name
    )

    db.add(new_booking)
    db.commit()
    db.refresh(new_booking)

    return {
        "message": "Seat booked successfully",
        "seat": booking.seat,
        "user": booking.user_name
    }
