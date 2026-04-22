from pydantic import BaseModel

class MovieCreate(BaseModel):
    title: str
    total_seats: int


class BookingCreate(BaseModel):
    seat: str
    user_name: str