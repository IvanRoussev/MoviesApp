import '../Style/MovieList.css';
function MoviesList({ movieList }) {
  //make a loop to look for that movie in particular and show all details about it

  return (
    <div className='movies'>
      {movieList.map((movie) => (
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
