

import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import NavBar from './Components/NavBar';



function App() {

  const [movies, setmovies]=useState(
    [
      {
          title: "Titanic",
          description:
            "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic.",
          posterUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
          rate: 4,
        },
        {
          title: "The Shawshank Redemption",
          description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          posterUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
          rate: 3,
        },
        {
          title: "The Godfather",
          description:
            "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
          posterUrl:
            "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
          rate: 5,
        },
        {
          title: "The Dark Knight",
          description:
            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest .",
          posterUrl:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
          rate: 2,
        },
        {
          title: "12 Angry Men",
          description:
            "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
          posterUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
          rate: 1,
        },
        {
          title: "Schindler's List",
          description:
            "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish.",
          posterUrl:
            "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          rate: 5,
        },
        {
          title: "Pulp Fiction",
          description:
            "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales.",
          posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
          rate: 5,
        },
        {
          title: "The Lord of the Rings: The Return of the King",
          description:
            "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach.",
          posterUrl:
            "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
          rate: 5,
        },
        {
          title: "The Good, the Bad and the Ugly",
          description:
            "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried.",
          posterUrl:
            "https://cdn.hmv.com/r/w-1280/hmv/files/33/3385d6d7-570c-4baa-b344-552f9b6147f5.jpg",
          rate: 4,
        },
        {
          title: "Fight Club",
          description:
            "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something.",
          posterUrl:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgTszE1phYg2G7H4RrgeSEssOw-Kpnh0Si-sF5pVQQrBXJ_6e",
          rate: 3,
        }  
      
      ]
  )
  const [title,setTitle]=useState("");
  const [rate,setrate]=useState(1);
  const addmovie=(newmovie)=>{setmovies([...movies,newmovie]);

  }
  const getTitle=(title)=>{
    setTitle(title);

  }
  const getrate=(rate)=>{
    setrate(rate);

  }
  return (
    <div>
    <NavBar getTitle={getTitle} getrate={getrate} />
    <br/>
    <AddMovie addmovie={addmovie}/>
    <MovieList Movies={movies} title={title} rate={rate} />
    </div>
  );
}

export default App;
