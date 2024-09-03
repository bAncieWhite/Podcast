import React from 'react';
import { useSelector } from 'react-redux';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      <h2>Favorite Episodes</h2>
      <ul>
        {favorites.map(episode => (
          <li key={episode.id}>
            <a href={episode.audioUrl}>{episode.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
