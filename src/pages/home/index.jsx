import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import CardFilme from '../../Components/Cards'
import Navbar from '../../Components/Navbar'

const Home = ({ setMovieData }) => {
  const [movies, setMovies] = useState([])
  const [currentCategory, setCurrentCategory] = useState('');
  const url = 'https://raw.githubusercontent.com/Erico-AS/api/main/filmes.json'

  useEffect(() => {
      const getMovies = async () => {
          const response = await fetch(url)
          const data = await response.json()
          setMovies(data.categorias)
          if (data.categorias.length > 0) {
            setCurrentCategory(data.categorias[0].nome);
          }
      }
      getMovies()
  }, []);

  const changeCategory = (category) => {
      setCurrentCategory(category);
    };

  return (
    <>
      <Navbar />
        <Button variant="contained"><Link to="/erico">Filmes Erico</Link></Button>
        <Button variant="contained"><Link to="/melo">Filmes Melo</Link></Button>
        <main>
        <div className='categoria-buttons'>
          {movies.map((categoria) => (
            <Button
              key={categoria.nome}
              variant='contained'
              onClick={() => changeCategory(categoria.nome)}
              className={currentCategory === categoria.nome ? 'active' : ''}
            >
              {categoria.nome}
            </Button>
          ))}
        </div>
        {movies.map((categoria) =>
          categoria.nome === currentCategory ? (
            <div className='filme' key={categoria.nome}>
              <h2>{categoria.nome}</h2>
              <ul>
                {categoria.filmes.map((filme) => (
                  <li key={filme.titulo}>
                    <p>Título: {filme.titulo}</p>
                    <p>Ano: {filme.ano}</p>
                    <p>Diretor: {filme.diretor}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </main>
    </>
  )
}

export default Home
