
import React from 'react'
import { Button, Card } from 'react-bootstrap'

function MovieCard({movie}) {
  return (
    <div >
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} alt="moviecard" width='100%' height='300px' />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Card.Title>{"⭐".repeat(movie.rate)}</Card.Title>
    <Button variant="primary">Watch</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard