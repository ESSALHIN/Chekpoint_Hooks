import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ Movies, title, rate}) {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', margin:'auto', width:'90%'}}>
        {Movies.filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase().trim()) && movie.rate>=rate).map(movie=>(
          <MovieCard movie={movie} key={movie.id}/>
        )
        )}
    </div>
  )
}

export default MovieList