import React, { useEffect, useState } from 'react'
import CardFilme from '../../Components/Cards'
import "../../Components/Cards/card.css"
import { Box, Container, Grid } from '@mui/material'
import "./melo.css"

const Melo = ({ setMovieData }) => {
    const [movies, setMovies] = useState([])
    const url = `https://raw.githubusercontent.com/Erico-AS/api/main/melo.json`

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
