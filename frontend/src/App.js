import { useState, useEffect } from "react";
import MovieGrid from "./components/MovieGrid";
import SeatGrid from "./components/SeatGrid";
import BookingForm from "./components/BookingForm";
import API from "./api/api";
import logo from "./assets/logo.png";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchMovies = async () => {
    const res = await API.get("/movies/");
    setMovies(res.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "1100px", padding: "20px" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center" }}>
          <img src={logo} alt="logo" width="140" />
          <h1>Movie Ticket Booking System</h1>
        </div>

        {/* MOVIES */}
        <div style={{ marginTop: "20px" }}>
          <h2>Now Showing</h2>

          <MovieGrid
            movies={movies}
            selectedMovie={selectedMovie}
            setSelectedMovie={(movie) => {
              setSelectedMovie(movie);
              setSelectedSeats([]);
            }}
          />
        </div>

        {/* SEAT & BOOKING */}
        {selectedMovie && (
          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "30px",
              alignItems: "flex-start"
            }}
          >
            {/* Seat Grid */}
            <div style={boxStyle}>
              <h3 style={{ textAlign: "center" }}>Choose Your Seat</h3>

              <SeatGrid
                movieId={selectedMovie.id}
                totalSeats={selectedMovie.total_seats}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                refreshKey={refreshKey} // ✅ correct
              />
            </div>

            {/* Booking Form */}
            <div style={boxStyle}>
              <BookingForm
                selectedMovie={selectedMovie}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                refreshMovies={fetchMovies}
                setRefreshKey={setRefreshKey}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const boxStyle = {
  flex: 1,
  border: "1px solid #a3a3a5",
  borderRadius: "12px",
  padding: "25px"
};

export default App;