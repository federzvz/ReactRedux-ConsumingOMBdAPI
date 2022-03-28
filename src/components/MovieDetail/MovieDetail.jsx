import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrSerieDetail, getSelectedMovieOrSerie, removeSelectedMovieOrSerie } from '../../features/movies/movieSlice';
import "./MovieDetail.scss";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHeart, faNewspaper } from "@fortawesome/free-regular-svg-icons";

const MovieDetail = () => {
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrSerie);
    console.log(data);
    useEffect(() => {
        dispatch(fetchAsyncMovieOrSerieDetail(imdbID));
        return () => {
            dispatch(removeSelectedMovieOrSerie());
        };
    },[dispatch, imdbID]);
    return (
        <div className="movie-section">
          {Object.keys(data).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <>
              <div className="section-left">
                <div className="movie-title">{data.Title} - <FontAwesomeIcon
                        icon={faHeart}/></div>
                <div className="movie-rating">
                  <span>
                    Puntuación IMDB <i className="fa fa-star"></i> : {data.imdbRating}
                  </span>
                  <span>
                  Votos IMDB <i className="fa fa-thumbs-up"></i> :{" "}
                    {data.imdbVotes}
                  </span>
                  <span>
                    Duración <i className="fa fa-film"></i> : {data.Runtime}
                  </span>
                  <span>
                    Año <i className="fa fa-calendar"></i> : {data.Year}
                  </span>
                </div>
                <div className="movie-plot">{data.Plot}</div>
                <div className="movie-info">
                  <div>
                    <span>Director</span>
                    <span>{data.Director}</span>
                  </div>
                  <div>
                    <span>Actores</span>
                    <span>{data.Actors}</span>
                  </div>
                  <div>
                    <span>Géneros</span>
                    <span>{data.Genre}</span>
                  </div>
                  <div>
                    <span>Lenguajes</span>
                    <span>{data.Language}</span>
                  </div>
                  <div>
                    <span>Premios</span>
                    <span>{data.Awards}</span>
                  </div>
                </div>
              </div>
              <div className="section-right">
                <img src={data.Poster} alt={data.Title} />
              </div>
            </>
          )}
        </div>
      );
    };

export default MovieDetail
