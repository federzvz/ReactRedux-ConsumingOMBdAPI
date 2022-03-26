import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const movieText = "Harry"
    const dispatch = useDispatch();
    useEffect(()=> {
        const fetchMovies = async () => {
            const response = await movieApi.
            get('?APIKey='+APIKey+'&s='+movieText+'&type=movie'
            )
            dispatch(addMovies(response.data))
        };

        fetchMovies()
    }, []);
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    );
};

export default Home;