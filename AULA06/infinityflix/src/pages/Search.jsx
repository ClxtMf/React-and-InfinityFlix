import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import './MovieGrid.css';


// importando as variaveis de ambiente (urls)
const seacrURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [seachrParams] = useSearchParams();
  // pegando o params filme da url e armazenando em query
  const query = seachrParams.get('filme');

  // criando a lista que vai armazenar os filmes
  const [movies, setMovies] = useState([]);

  const getMovies = async (url) => {
    const resposta = await fetch (url);
    const dados = await resposta.json();
    setMovies(dados.results);
  }

  useEffect(() => {
    const url = `${searchURL}?{apiKey}&query=${query}`;
    getMovies(url);
  },[query])

  return (
    <h1>Resultado para: {query}</h1>
  )
}

export default Search