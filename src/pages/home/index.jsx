import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Grid } from '@mui/material'
import CardFilme from '../../Components/Cards'
import Navbar from '../../Components/Navbar'
import CardPrincipal from '../../Components/CardPrincipal'
import './styles.css'

const Home = ({ setMovieData }) => {
  const [movies, setMovies] = useState([])
  const [currentCategory, setCurrentCategory] = useState('');
  const url = 'https://raw.githubusercontent.com/Erico-AS/api_hook_filmes/main/data/filmes.json'

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
        <main>
        <div className='categoria-buttons'>
          {movies.map((categoria) => (
            <Button
              key={categoria.nome}
              variant='text'
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
              <Grid container spacing={2}>
                {categoria.filmes.map((filme) => (
                  <Grid item xs={2} key={filme.titulo}>
                    <Box>
                      <CardPrincipal
                      titulo={<h1>{filme.titulo}</h1>}
                      diretor={<h2>{filme.diretor}</h2>}
                      ano={<h3>{filme.ano}</h3>}
                      imagem={filme.imagem}
                      >
                    </CardPrincipal>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </div>
          ) : null
        )}
      </main>
    </>
  )
}

export default Home
