import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';

function App() {
  document.title = 'Movie APP'
  const [Movies, setMovies] = useState([
      {
        name:"fast & furious",
        posteurl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRhJNaN0nQi5oaoWPNzCEDgc-bXdofmz6LT7GbxjoukjWSgC-p",
        description:"fvfvvfeve",
        rating:5
      },
      {
        
        name:"prison break",
        posteurl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRhJNaN0nQi5oaoWPNzCEDgc-bXdofmz6LT7GbxjoukjWSgC-p",
        description:"fvfvvfeve",
        rating:5
      },
      {
        name:"jocker",
        posteurl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRhJNaN0nQi5oaoWPNzCEDgc-bXdofmz6LT7GbxjoukjWSgC-p",
        description:"fvfvvfeve",
        rating:4
      },
      {
        name:"the worst",
        posteurl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRhJNaN0nQi5oaoWPNzCEDgc-bXdofmz6LT7GbxjoukjWSgC-p",
        description:"fvfvvfeve",
        rating:2
      },
      {
        name:"the mechanic",
        posteurl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRhJNaN0nQi5oaoWPNzCEDgc-bXdofmz6LT7GbxjoukjWSgC-p",
        description:"fvfvvfeve",
        rating:4
      },
      {
        name:"herry poter",
        posteurl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRhJNaN0nQi5oaoWPNzCEDgc-bXdofmz6LT7GbxjoukjWSgC-p",
        description:"fvfvvfeve",
        rating:1
      },
      {
        name:"papjhon",
        posteurl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRhJNaN0nQi5oaoWPNzCEDgc-bXdofmz6LT7GbxjoukjWSgC-p",
        description:"fvfvvfeve",
        rating:1
      },
    ]);
    const addMovie = (newMovie) =>{
      setMovies([...Movies, newMovie]);
    }
    return (
      <div>
        <header className="App-header">
          <h1>Movie App</h1>
          <AddMovie addMovie={addMovie}/>
          <MoviesList Movies={Movies}/>
        </header>
      </div>
    );
  }


export default App;
