import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Home = ({ setMovieData }) => {
  const [movies, setMovies] = useState([])
  const url = 'https://raw.githubusercontent.com/Erico-AS/api/main/filmes.json'

  useEffect(() => {
      const getMovies = async () => {
          const response = await fetch(url)
          const data = await response.json()
          setMovies(data.categorias)
      }
      getMovies()
  }, [])

  movies.forEach(element => {
    var filme = element.filmes[0].titulo
    console.log(filme + " || " + element.nome)
  });

  return (
    <div>
        <Button variant="contained"><Link to="/erico">Filmes Erico</Link></Button>
        <Button variant="contained"><Link to="/melo">Filmes Melo</Link></Button>
    </div>
  )
}

export default Home
