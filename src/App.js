import React from 'react';
import SongList from './components/SongList';
import SongForm from './components/SongForm'; // Import SongForm

function App() {
  return (
    <div>
      <h1>Music Library</h1>
      <SongForm /> {/* Render SongForm */}
      <SongList />
    </div>
  );
}

export default App;