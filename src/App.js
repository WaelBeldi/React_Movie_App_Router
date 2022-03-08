import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import MovieTrailer from './Components/MovieTrailer';
import { movieData } from './Data';

function App() {
  
  const [movies, setMovies] = useState(movieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  return (
    <BrowserRouter>
    <div className="App">
      <div className="header">
        <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} filterRating={filterRating} />
      </div>
    <Routes>
      <Route path="/" element={<MovieList movies= {movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating} />}/>
      <Route path="/:id" element={<MovieTrailer movies= {movies}/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
