import { useState, useEffect } from "react";
import API from "../api/api";

function BookingForm({ selectedMovie, selectedSeats, setSelectedSeats, refreshMovies, setRefreshKey }) {
  const [user, setUser] = useState("");
  const [seatInput, setSeatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isTyping) {
      setSeatInput(selectedSeats.join(","));
    }
  }, [selectedSeats, isTyping]);

  const isValidSeat = (seat, totalSeats) => {
    const seatsPerRow = 10;
    const rowsNeeded = Math.ceil(totalSeats / seatsPerRow);

    const validRows = Array.from({ length: rowsNeeded }, (_, i) =>
      String.fromCharCode(65 + i)
    );

    const match = seat.match(/^([A-Z])(\d+)$/);
    if (!match) return false;

    const row = match[1];
    const number = parseInt(match[2]);

    const seatIndex =
      validRows.indexOf(row) * seatsPerRow + (number - 1);

    return validRows.includes(row) &&
           number >= 1 &&
           number <= seatsPerRow &&
           seatIndex < totalSeats;
  };

  const handleSeatInput = (value) => {
    setSeatInput(value);

    if (!selectedMovie) return;

    const seatsArray = value
      .split(",")
      .map(s => s.trim().toUpperCase())
      .filter(s => s !== "");

    if (seatsArray.length > 5) {
      alert("Max 5 seats allowed");
      return;
    }

    const validSeats = [];

    for (let seat of seatsArray) {
      if (!/^[A-Z]\d+$/.test(seat)) continue;
      if (!isValidSeat(seat, selectedMovie.total_seats)) continue;

      validSeats.push(seat);
    }

    setSelectedSeats(
      validSeats.sort((a, b) => {
        const rowA = a.charCodeAt(0);
        const rowB = b.charCodeAt(0);
        const numA = parseInt(a.slice(1));
        const numB = parseInt(b.slice(1));

        if (rowA === rowB) return numA - numB;
        return rowA - rowB;
      })
    );
  };

  const bookSeat = async () => {
    if (!selectedMovie) return alert("Select a movie");
    if (!user) return alert("Enter your name");
    if (selectedSeats.length === 0) return alert("Select seats");

    try {
      for (let seat of selectedSeats) {
        await API.post(`/movies/${selectedMovie.id}/book`, {
          seat,
          user_name: user
        });
      }

      alert("Booking successful");

      setSeatInput("");
      setSelectedSeats([]);
      setUser("");

      refreshMovies();

      setRefreshKey(prev => prev + 1);

    } catch (err) {
      alert(err.response?.data?.detail || "Error");
    }
  };

  return (
    <div>
      <h3>{selectedMovie.title}</h3>

      <input
        placeholder="Enter seats (A1,B2,E5)"
        value={seatInput}
        onFocus={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
        onChange={(e) => handleSeatInput(e.target.value)}
      />

      <input
        placeholder="Your Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button onClick={bookSeat}>
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingForm;