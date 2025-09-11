import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

const API_KEY = "SUA_CHAVE_DA_TMDB"; // Substitua por sua chave válida da TMDb

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => {
        setFilmes(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar filmes:", err);
        setError("Não foi possível carregar os filmes. Tente novamente mais tarde.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Carregando filmes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="filme-container">
      <div className="filme-header">
        <h1>🎬 Filmes Populares</h1>
        <p>Descubra os filmes mais populares do momento</p>
      </div>
      
      <div className="filme-grid">
        {filmes.map((filme) => (
          <div key={filme.id} className="filme-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
              alt={filme.title}
              loading="lazy"
            />
            <h3>{filme.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;