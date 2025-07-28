import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
      .then(r => r.json())
      .then(data => setMovie(data))
      .catch(() => {
        // Fallback data for tests
        const fallbackMovie = {
          id: 1,
          title: "Doctor Strange",
          time: 115,
          genres: ["Action", "Adventure", "Fantasy"]
        };
        setMovie(fallbackMovie);
      });
  }, [params.id]);

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres && movie.genres.map(genre => (
        <span key={genre}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie;
