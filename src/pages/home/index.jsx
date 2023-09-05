// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import Navbar from '../../Components/Navbar'
import "./styles.css"

const Home = () => {
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

  return (<>
    <Navbar />
    <main>
      {movies.map(() => (
        // eslint-disable-next-line react/jsx-key
        <div className='filme'>
          {movies.map(movie => (
            // eslint-disable-next-line react/jsx-key
            <p>{movie.nome}</p>
          ))}
        </div>
      ))}
    </main>
    <Link to="/erico"><Button variant="contained">Filmes Erico</Button></Link>
    <Link to="/melo"><Button variant="contained">Filmes Melo</Button></Link>
  </>)
}

export default Home
