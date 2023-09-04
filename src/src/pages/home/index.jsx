import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = ({ setMovieData }) => {
/*    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        getMovies()
    }, [])*/

  return (
    <div>
        <Link to="/erico">Filmes Erico</Link>
        <Link to="/melo">Filmes Melo</Link>
    </div>
  )
}

export default Home
