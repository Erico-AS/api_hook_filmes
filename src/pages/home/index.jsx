import React, { useEffect, useState } from 'react'

const Home = ({ setMovieData }) => {
    const [movies, setMovies] = useState([])
    const url = `./filmes-gabriel.json`

    useEffect(() => {
        const getMovies = async () => {
            const response = await fetch(url)
            /* console.log(response) */
            const data = await response.json()
            /* console.log(data) */
            setMovies(data)
        }
        getMovies()
    }, [])

    console.log(movies)

  return (
    <div>
      { 
        movies.map( movie => (
            <div key={movie.id}>
                <h2>
                    {movie.id} {movie.titulo} <br/> {movie.data}
                    {movie.diretores} <br/> {movie.duracao} <br/> {movie.avaliacao} <br/>
                    {movie.tipo} <br/> {movie.sinopse} <br/> {movie.imagem}
                </h2>
                <img src={movie.imagem} alt={movie.titulo} />
            </div>
        ))
      
      }
    </div>
  )
}

export default Home
