import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
  favorites: favoritesReducer,
});
