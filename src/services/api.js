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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  if (!response.ok) {
    throw new Error('Failed to create song');
  }
  return response.json();
};

export const updateSong = async (song) => {
  const response = await fetch(`${API_URL}/${song.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  if (!response.ok) {
    throw new Error('Failed to update song');
  }
  return response.json();
};