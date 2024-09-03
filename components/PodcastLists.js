import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch('https://listen-api.listennotes.com/api/v2/best_podcasts', {
      headers: {
        'X-ListenAPI-Key': 'YOUR_API_KEY',
      },
    })
      .then(response => response.json())
      .then(data => setPodcasts(data.podcasts));
  }, []);

  return (
    <div>
      <h2>Popular Podcasts</h2>
      <ul>
        {podcasts.map(podcast => (
          <li key={podcast.id}>
            <Link to={`/podcast/${podcast.id}`}>{podcast.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
