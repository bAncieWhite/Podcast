import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [podcasts, setPodcasts] = useState([]);

  // Fetch podcasts from an API (e.g., ListenNotes API)
  useEffect(() => {
    fetch('https://listen-api.listennotes.com/api/v2/best_podcasts', {
      headers: {
        'X-ListenAPI-Key': 'YOUR_API_KEY', // Replace with your ListenNotes API key
      },
    })
      .then(response => response.json())
      .then(data => setPodcasts(data.podcasts))
      .catch(error => console.error('Error fetching podcasts:', error));
  }, []);

  return (
    <div>
      <h1>Popular Podcasts</h1>
      <div className="podcast-list">
        {podcasts.length > 0 ? (
          podcasts.map(podcast => (
            <div key={podcast.id} className="podcast-item">
              <img src={podcast.thumbnail} alt={podcast.title} />
              <h2>{podcast.title}</h2>
              <p>{podcast.description}</p>
              <Link to={`/podcast/${podcast.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>Loading podcasts...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
