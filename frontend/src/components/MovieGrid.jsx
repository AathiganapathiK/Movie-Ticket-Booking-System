import MovieCard from "./MovieCard";

function MovieGrid({ movies, selectedMovie, setSelectedMovie }) {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isSelected={selectedMovie?.id === movie.id}
          onSelect={() => setSelectedMovie(movie)}
        />
      ))}
    </div>
  );
}

export default MovieGrid;