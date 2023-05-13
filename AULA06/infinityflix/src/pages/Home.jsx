import { useState, useEffect } from "react"
import MovieCard from '../components/MovieCard'

// import css
import './MovieGrid.css';

// importando as variaveis de ambiente (urls)
const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  // Criando um state para armazenar os resultados
  // da busca da API 
  const [movies, setMovies] = useState([]);

  // Função que irá buscar os filme na API
  const getMovies = async (url) => {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    setMovies(dados.results);

  }

  // Chamando a função quando a página carregar
  useEffect(() => {
    // Montando a url
    const url = `${movieURL}top_rated?${apiKey}`;
    // Chamando a função
    getMovies(url);
  }, [])


  return (
    <div className="container">
      <h2 className="title">
        Melhores Filmes:
      </h2>
      <div className="movies-container">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Home





















































