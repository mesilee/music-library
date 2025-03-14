const API_URL = 'https://jsonplaceholder.typicode.com/todos'; // Using JSONPlaceholder for testing

export const getSongs = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch songs');
  }
  return response.json();
};