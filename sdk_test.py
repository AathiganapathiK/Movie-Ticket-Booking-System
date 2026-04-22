from openapi_client import ApiClient, Configuration
from openapi_client.api import default_api
from openapi_client.models.booking_create import BookingCreate

config = Configuration(host="http://localhost:8000")
client = ApiClient(config)
api = default_api.DefaultApi(client)

# Get movies
movies = api.get_movies_movies_get()
print("Movies:", movies)

# Book seat 
booking_data = BookingCreate(
    seat="B3",
    user_name="sdk_user"
)

response = api.book_seat_movies_movie_id_book_post(
    movie_id=2,   
    booking_create=booking_data
)

print("Booking:", response)