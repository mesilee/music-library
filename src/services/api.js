const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getSongs = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch songs');
    }
    return response.json();
  };

export const createSong = async (song) => {
  const response = await fetch(API_URL, {
    // ... rest of the function
  });
  // ... rest of the function
};

export const updateSong = async (song) => {
  const response = await fetch(`<span class="math-inline">\{API\_URL\}/</span>{song.id}`, {
    // ... rest of the function
  });
  // ... rest of the function
};

export const deleteSong = async (songId) => {
  const response = await fetch(`<span class="math-inline">\{API\_URL\}/</span>{songId}`, {
    // ... rest of the function
  });
  // ... rest of the function
};