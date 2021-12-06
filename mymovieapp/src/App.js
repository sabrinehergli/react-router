import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import NavBar from './Components/NavBar/NavBar.js';
import MovieList from "./Components/MovieList/MovieList.js";
import  Trailer from './Components/Trailer/Trailer.js';

function App() {
  const MovieData = [
    {
        id:uuidv4(),
        Title: "Moonlight",
        Info: "Biography Drama Music",
        Description:
            "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles .",
        PosterUrl:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ba32041615387.57acc4bf0b15f.jpg",
        TrailerUrl:"https://www.youtube.com/embed/9NJj12tJzqc",
        Rating: 4,
    },
    {
        id:uuidv4(),
        Title: "Gone Girl",
        Info: "Drama Mystery Thriller",
        Description:
            "On the occasion of his fifth wedding anniversary, Nick Dunne reports that his wife, Amy, has gone missing. ",
        PosterUrl:
            "https://movieposters2.com/images/1260157-b.jpg",
        TrailerUrl:"https://www.youtube.com/embed/J8A81h_EXnc" ,
        Rating: 4,
    },
    {
        id:uuidv4(),
        Title: "A Star Is Born",
        Info:"Drama Music Romance",
        Description:
            "A young woman comes to Hollywood with dreams of stardom, and achieves them only with the help of an alcoholic leading man whose best days are behind him",
        PosterUrl:
            "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        TrailerUrl:"https://www.youtube.com/embed/nSbzyEJ8X9E",
        Rating: 5,
    },
    

    {
        id:uuidv4(),
        Title: "Venom",
        Info:"Action Adventure Sci-Fi",
        Description:
            "When Eddie Brock gains the powers of a symbiote, he will have to free his alter ego Venom to save his life.",
        PosterUrl:
            "https://i.smalljoys.me/2019/06/venom2.jpg?resize=533%2C768&ssl=1&strip=all",
        TrailerUrl:"https://www.youtube.com/embed/u9Mv98Gr5pY",
        Rating: 4,
    },
    
    {
        id:uuidv4(),
        Title: "Her",
        Info:"Drama Romance Sci-Fi",
        Description:
            "In the near future, a lonely writer will develop an unlikely relationship with an operating system designed to meet all of their needs.",
        PosterUrl:
            "https://truth.bahamut.com.tw/s01/201402/4518fa57708bac0fa0f09662f73dcad4.JPG",
        TrailerUrl:"https://www.youtube.com/embed/pU0X1_KTDgc",
        Rating: 3,
    },
    {
        id:uuidv4(),
        Title: "Wild",
        Info:"Adventure Biography Drama",
        Description:
            "Although inexperienced, a woman decides to walk 1,700 km on foot and alone, in order to rebuild herself.",
        PosterUrl:
            "https://img-4.linternaute.com/PorDrZVn1eZGtrDP7ma59y7vC9w=/1500x/smart/6ff78a527733490691bb9ab41c3fcf3c/ccmcms-linternaute/11187456.jpg",
        TrailerUrl:"https://www.youtube.com/embed/tn2-GSqPyl0",
        Rating: 4,
    },
     {
        id:uuidv4(),
        Title: "Soul",
        Info:"Animation Adventure Comedy",
        Description:
            "A musician who has lost his passion for music is transported out of his body and must find his way back with the help of a child soul who gets to know himself.",
        PosterUrl:
            "https://m.media-amazon.com/images/I/81y09CotweL._SY445_.jpg",
       TrailerUrl: "https://www.youtube.com/embed/xOsLIiBStEs",
        Rating: 5,
    },
    
    {
      id:uuidv4(),
        Title: "The Lion King",
        Info:"Animation Adventure Drama",
        Description:
            "Kion, Simba's son, leads his friends known as the Lion Guard to protect the Pride Lands.",
        PosterUrl:
            "https://i.pinimg.com/474x/55/f1/9e/55f19e119da43d9398f315b45032538d.jpg",
        TrailerUrl:"https://www.youtube.com/embed/4CbLXeGSDxg" ,
        Rating: 5,
    },
   
];
const [newMovie, setNewMovie] = useState(MovieData)
const [titleSearch, setTitleSearch] = useState("");
const [ratingSearch, setRatingSearch] = useState(0);
  return (
  (<Router>
    <div className="App">

      <NavBar setTitleSearch={setTitleSearch}
                setRatingSearch={setRatingSearch}/>
      <Switch>
        <Route path="/Movies/:id">
          <Trailer newMovie={newMovie}/>
        </Route>
        <Route exact path="/">
      <MovieList
                titleSearch={titleSearch}
                ratingSearch={ratingSearch}
                newMovie={newMovie}
                setNewMovie={setNewMovie}
            />
        </Route>    
      </Switch>
     
    </div>
    </Router>
  )
  );
}

export default App;
