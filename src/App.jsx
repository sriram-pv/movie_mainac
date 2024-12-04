import React from "react";

import Navbar from "./components/Navbar/Navbar";
import MovieList from './components/MovieList/MovieList'
import "../src/index.css";
import Fire from './assets/fire.png'
import Star from './assets/glowing-star.png'
import Party from './assets/partying-face.png'
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main><MovieList type='popular' title='Popular' emoji={Fire}/></main>
      <main><MovieList type='top_rated' title='Top Rated' emoji={Star}/></main>
      <main><MovieList type='upcoming' title='Upcoming' emoji={Party}/></main>
    </div>
  );
};

export default App;
