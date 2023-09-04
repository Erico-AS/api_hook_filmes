import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Home = ({ setMovieData }) => {
/*    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        getMovies()
    }, [])*/

  return (
    <div>
        <Button variant="contained"><Link to="/erico">Filmes Erico</Link></Button>
        <Button variant="contained"><Link to="/melo">Filmes Melo</Link></Button>
    </div>
  )
}

export default Home
