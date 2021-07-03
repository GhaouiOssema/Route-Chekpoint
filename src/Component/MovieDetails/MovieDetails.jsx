import React from "react";
import { useParams } from "react-router-dom";
import "../MovieDetails/MovieDetails.css";

function MovieDetails({ MovieData }) {
    const { movieTitle } = useParams();
    const movie = MovieData.find((movie) => movie.title === movieTitle);
    return (
        <div className="container">
            <div className="container-title">
                <h1 className="ttitle">{movie.title}</h1>
            </div>
            <div className="header">
            <img className="PosterMovie" src={movie.posterUrl} />
            <h5 className="desc" style={{ color: "#fff" }}>
                <span>{movie.description}</span>
                <div className="video">
            <iframe width="455" height="300" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </h5>
            </div>
        </div>
    );
}

export default MovieDetails;