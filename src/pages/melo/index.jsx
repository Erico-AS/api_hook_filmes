import React, { useEffect, useState } from 'react'
import CardFilme from '../../Components/Cards'
import "../../Components/Cards/card.css"
import { Box, Container, Grid } from '@mui/material'
import "./melo.css"
import Navbar from '../../Components/Navbar'

const Melo = ({ setMovieData }) => {
    const [movies, setMovies] = useState([])
    const url = `https://raw.githubusercontent.com/Erico-AS/api_hook_filmes/main/data/melo.json`

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

    console.log(movies)

  return (
    <div>
      <Navbar />
      <Container maxWidth="500">
      <Grid container spacing={3}>
      { 
        movies.map( movie => (
          <Grid item xs={2.4}>
            <Box>
            <CardFilme 
            imagem = {movie.imagem}
            titulo = {movie.titulo}
            avaliacao = {movie.avaliacao}
            sinopse = {movie.sinopse}
            ano = {movie.lancamento}
            diretor={movie.diretores}
            className="sinopse"
            />
            </Box>
          </Grid>
        ))
      }
      </Grid>
      </Container>
    </div>
  )
}

export default Melo
