import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';


const Home = () => {
    const dispatch = useDispatch();
    const movieText = "John";
    const showText = "Dark";
    useEffect(()=> {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncSeries(showText));
    }, [dispatch]);
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    );
};

export default Home;