import Header from './components/Header';
import MoviesList from './components/MoviesList';
import './Style/App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('data.json');
      const data = setMovies(response.data);
      return data;
    } catch (error) {}
  }
  fetchData();
  return (
    <div className='App'>
      <Header />
      <MoviesList movieList={movies} />
    </div>
  );
}

export default App;
