import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';


function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetail/>} />
            <Route path="/favoritos" element={<Favorites/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
