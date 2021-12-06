import React from 'react';
import {useParams,Link} from "react-router-dom";
import {Button} from 'react-bootstrap';
import './Trailer.css'


export default function Trailer ({newMovie})  {
    let Id = useParams().id;
    let targetMovie = newMovie.find((el) => el.id === Id);
    return (
        console.log(useParams()),
        (<div className="container">
            <div className="trailer" >
                <iframe
                    className="video"
                    src={targetMovie.TrailerUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>{""}
                <h1 style={{ color:"#ae7cbb" , marginTop:'10px'}}>{targetMovie.Title} </h1>
                <p style={{color:"white" , padding:'20px' ,maxWidth:'500px'}}> {targetMovie.Description} </p>
                <Link to="/">
                    <Button style={{backgroundColor:'#ae7cbb', borderColor:'#ae7cbb'}}>Go back to Home page</Button>
                </Link>
            </div>
            </div>
        )
    )
}




