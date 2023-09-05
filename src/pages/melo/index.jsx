import React, { useEffect, useState } from 'react'
import CardFilme from '../../Components/Cards'
import "../Components/Cards/card.css"

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
      { 
        movies.map( movie => (
            <CardFilme 
            imagem = {movie.imagem}
            titulo = {movie.titulo}
            avaliacao = {movie.avaliacao}
            sinopse = {movie.sinopse}
            ano = {movie.lancamento}/>
        ))
      
      }
    </div>
  )
}

export default Melo
