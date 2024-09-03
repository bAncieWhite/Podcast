export const addFavorite = episode => {
    return {
      type: 'ADD_FAVORITE',
      payload: episode,
    };
  };
  
  export const removeFavorite = episode => {
    return {
      type: 'REMOVE_FAVORITE',
      payload: episode,
    };
  };
  