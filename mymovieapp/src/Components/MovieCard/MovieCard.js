import React, { useState} from 'react';
import './MovieCard.css';
import{FaStar} from "react-icons/fa";
import {Link} from "react-router-dom";

function MovieCard ({newMovie}) {
  
    return (
  <div>
    <div class="Wrapper">
      <div className="MainCard">
        <div className="CardLeft">
          <div className="CardDatails">
            <h1>{newMovie.Title}</h1>
             <p className="Info">{newMovie.Info}</p> 
            
        
            <div className="Stars">{newMovie.Rating === 5 ? (
                    <span style={{ color: "yellow" }}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                ) : newMovie.Rating === 4 ? (
                    <span style={{ color: "yellow" }}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                ) : newMovie.Rating === 3 ? (
                    <span style={{ color: "yellow" }}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </span>
                ) : newMovie.Rating === 2 ? (
                    <span style={{ color: "yellow" }}>
                        <FaStar />
                        <FaStar />
                    </span>
                ) : newMovie.Rating === 1 ? (
                    <span style={{ color: "yellow" }}>
                        <FaStar />
                    </span>
                ) : (
                    newMovie.Rating + " stars "
                )}{" "}
            </div>
        
            <div className="SocialBtn">
              <button className="Download">
                DOWNLOAD
              </button>
            </div>  
          </div>
        </div>
        <div class="CardRight">
          <div >
          <Link to={`/Movies/${newMovie.id}`}>
            <img src={newMovie.PosterUrl} alt=""/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default MovieCard;
