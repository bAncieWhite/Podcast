import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
import PodcastDetailPage from './pages/PodcastDetailPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PodcastList />} />
          <Route path="/podcast/:id" element={<PodcastDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
