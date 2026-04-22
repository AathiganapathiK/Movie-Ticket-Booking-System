function MovieCard({ movie, isSelected, onSelect }) {
  return (
    <div style={{
      border: isSelected ? "2px solid gold" : "1px solid gray",
      padding: "15px",
      width: "200px",
      borderRadius: "10px"
    }}>
      <h3>{movie.title}</h3>

      <p>{movie.total_seats} total seats</p>
      <p>{movie.available_seats} seats available</p>

      <button onClick={onSelect}>
        {isSelected ? "✓ Selected" : "Select Movie"}
      </button>
    </div>
  );
}

export default MovieCard;