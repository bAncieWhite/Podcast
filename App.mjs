import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
import FavoritesPage from './pages/FavoritesPage';
import PodcastDetailPage from './pages/PodcastDetailPage';

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
