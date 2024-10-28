import React, { useEffect, useState } from 'react';
import './Noticias.css'; // Importando o CSS para estilização

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY; // Chave de API carregada do .env.local

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
        const data = await response.json();

        if (data.status === 'ok') {
          setNoticias(data.articles || []);
        } else {
          console.error("Erro ao buscar notícias:", data.message);
        }
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNoticias();
  }, [apiKey]);

  return (
    <div className="noticias-container">
      <h1>Últimas Notícias de Tecnologia</h1>
      {noticias.length > 0 ? (
        noticias.map((noticia, index) => (
          <div key={index} className="noticia">
            {noticia.urlToImage && <img src={noticia.urlToImage} alt={noticia.title} className="noticia-imagem" />}
            <h2 className="noticia-titulo">{noticia.title}</h2>
            <p className="noticia-descricao">{noticia.description}</p>
            <a href={noticia.url} target="_blank" rel="noopener noreferrer" className="noticia-link">Ler mais</a>
          </div>
        ))
      ) : (
        <p>Carregando notícias...</p>
      )}
    </div>
  );
};

export default Noticias;
