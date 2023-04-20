import '../Style/MovieList.css';
import { useState } from 'react';

function MoviesList({ movieList, genre }) {
  // const [movies, setMovies] = useState([]);

  const list = [];

  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].genres.includes(genre)) {
      // setMovies(movieList[i]);
      list.push(movieList[i]);
    }
  }
  console.log(list);
  return (
    <div className='movies'>
      {list.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.thumbnail} alt={movie.extract} />
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
