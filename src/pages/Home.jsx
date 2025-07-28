import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(() => {
        const fallbackMovies = [
          { id: 1, title: "Doctor Strange" },
          { id: 2, title: "Trolls" },
          { id: 3, title: "Jack Reacher: Never Go Back" }
        ];
        setMovies(fallbackMovies);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
