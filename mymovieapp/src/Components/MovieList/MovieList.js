import React,{useState} from "react";
import { v4 as uuidv4 } from "uuid";
import MovieCard from "../MovieCard/MovieCard.js";
import "./MovieList.css";
import AddMovie from "../AddMovie/AddMovie.js";

function MovieList({
    titleSearch,
    ratingSearch,
    newMovie,
    setNewMovie,
    
}) {
    
    const[newMovieData,setNewMovieData] =useState({
        id:uuidv4(),
        Title: "",
        Description: "",
        PosterUrl: "",
        TrailerUrl:"",
        Rating: 0,
    })
    
    return (
        <div className="movielist">
            {newMovie.filter(
                (el) =>
                    el.Title.toLowerCase().includes(
                        titleSearch.toLowerCase()
                    ) && el.Rating >= ratingSearch
            ).map((val, i) => (
                <div key={i}>
                    <MovieCard newMovie={val} />
                </div>
            ))}

            <AddMovie
                newMovie={newMovie}
                newMovieData={newMovieData}
                setNewMovie={setNewMovie}
                setNewMovieData={setNewMovieData}
            />
        </div>
    );
}

export default MovieList;
