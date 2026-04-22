import { useEffect, useState } from "react";
import API from "../api/api";

function SeatGrid({ totalSeats, selectedSeats, setSelectedSeats, movieId ,refreshKey}) {
  const seatsPerRow = 10;

  const [bookedSeats, setBookedSeats] = useState([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); // success | error

  // 🔵 Generate rows dynamically (A, B, C...)
  const rowsNeeded = Math.ceil(totalSeats / seatsPerRow);
  const rows = Array.from({ length: rowsNeeded }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  // 🔵 Fetch booked seats from backend
  useEffect(() => {
    if (!movieId) return;

    API.get(`/movies/${movieId}/bookings`)
      .then(res => setBookedSeats(res.data))
      .catch(err => console.error(err));
  }, [movieId,refreshKey]);

  // 🔵 Auto-hide popup
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => setMessage(""), 3000);
    return () => clearTimeout(timer);
  }, [message]);

  // 🔵 Toggle seat selection
  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    // Max 5 seats limit
    if (!selectedSeats.includes(seat) && selectedSeats.length >= 5) {
      setType("error");
      setMessage("Max 5 seats allowed");
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
    
  };

  let seatCount = 0;

  return (
    <div style={{ position: "relative" }}>
      
      {/* 🔴 Popup Message */}
      {message && (
        <div
          style={{
            position: "absolute",
            top: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "8px 15px",
            borderRadius: "6px",
            background: type === "error" ? "#e74c3c" : "#2ecc71",
            color: "white",
            fontSize: "13px",
            zIndex: 1000
          }}
        >
          {message}
        </div>
      )}

      {/* 🔵 Seat Grid */}
      {rows.map(row => (
        <div
          key={row}
          style={{
            display: "flex",
            margin: "5px",
            alignItems: "center"
          }}
        >
          {/* Row Label */}
          <span style={{
            width: "20px",
            marginRight: "10px",
            color: "white"
          }}>
            {row}
          </span>

          {Array.from({ length: seatsPerRow }).map((_, i) => {
            if (seatCount >= totalSeats) return null;

            const seat = `${row}${i + 1}`;
            seatCount++;

            const isSelected = selectedSeats.includes(seat);
            const isBooked = bookedSeats.includes(seat);

            return (
              <button
                key={seat}
                disabled={isBooked}
                onClick={() => toggleSeat(seat)}
                style={{
                  margin: "3px",
                  padding: "6px 10px",
                  background: isBooked
                    ? "red"
                    : isSelected
                    ? "gold"
                    : "#333",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: isBooked ? "not-allowed" : "pointer"
                }}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      ))}

      {/* 🔵 Legend */}
      <div style={{ marginTop: "10px", color: "white" }}>
        <span style={{ marginRight: "15px" }}>⬛ Available</span>
        <span style={{ marginRight: "15px", color: "gold" }}>🟨 Selected</span>
        <span style={{ color: "red" }}>🟥 Booked</span>
      </div>
    </div>
  );
}

export default SeatGrid;