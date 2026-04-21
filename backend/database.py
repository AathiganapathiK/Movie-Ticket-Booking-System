from sqlalchemy import Column, Integer, String
from database import Base

class Movie(Base):
    __tablename__ = "movies"
    id = Column(Integer, primary_key=True)
    title = Column(String)
    total_seats = Column(Integer)

class Booking(Base):
    __tablename__ = "movie_bookings"
    id = Column(Integer, primary_key=True)
    movie_id = Column(Integer)
    seat = Column(String)
    user_name = Column(String)