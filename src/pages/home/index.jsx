import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Home = ({ setMovieData }) => {
  const [movies, setMovies] = useState([])
  const url = `https://raw.githubusercontent.com/Erico-AS/api_hook_filmes/main/data/filmes.json`

  useEffect(() => {
      const getMovies = async () => {
          const response = await fetch(url)
          console.log(response)
          const data = await response.json()
          console.log(data)
          setMovies(data)
      }
      getMovies()
  }, [])

  console.log(movies.categoria.nome.filme)

  return (
    <div>
        <Button variant="contained"><Link to="/erico">Filmes Erico</Link></Button>
        <Button variant="contained"><Link to="/melo">Filmes Melo</Link></Button>
    </div>
  )
}

export default Home
