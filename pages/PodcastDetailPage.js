import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PodcastDetailPage = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://listen-api.listennotes.com/api/v2/podcasts/${id}`, {
      headers: {
        'X-ListenAPI-Key': 'YOUR_API_KEY',
      },
    })
      .then(response => response.json())
      .then(data => {
        setPodcast(data);
        setEpisodes(data.episodes);
      });
  }, [id]);

  return (
    <div>
      {podcast && (
        <div>
          <h2>{podcast.title}</h2>
          <p>{podcast.description}</p>
          <h3>Episodes</h3>
          <ul>
            {episodes.map(episode => (
              <li key={episode.id}>
                <a href={episode.audio}>Play {episode.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PodcastDetailPage;
