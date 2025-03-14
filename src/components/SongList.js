/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongsRequest, updateSongRequest, deleteSongRequest } from '../redux/songs/songsSlice';
import styled from '@emotion/styled';

const SongListContainer = styled.div`
  padding: 20px;
  font-family: sans-serif;
  width: 500px;
  margin: 20px auto;
`;

const SongListTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

const SongListUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const SongListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Distribute space between elements */
  align-items: center; /* Align items vertically */
`;

const SongListItemActions = styled.div`
  display: flex;
  gap: 5px; /* Add some space between buttons */
`;

const SongEditInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const SongEditButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const SongCancelButton = styled.button`
  padding: 5px 10px;
  background-color: #ccc;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const SongDeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

function SongList() {
    const dispatch = useDispatch();
    const { songs, loading, error } = useSelector((state) => state.songs);
    const [editingSong, setEditingSong] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');
  
    useEffect(() => {
      dispatch(fetchSongsRequest());
    }, [dispatch]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    function handleEdit(song) {
      setEditingSong(song);
      setEditedTitle(song.title);
    }
  
    function handleSave(song) {
      dispatch(updateSongRequest({ id: song.id, title: editedTitle }));
      setEditingSong(null);
    }
  
    function handleDelete(songId) {
      dispatch(deleteSongRequest(songId));
    }
  
    return (
      <SongListContainer>
        <SongListTitle>Song List</SongListTitle>
        <SongListUl>
          {songs.map((song) => (
            <SongListItem key={song.id}>
              {editingSong && editingSong.id === song.id ? (
                <>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <button onClick={() => handleSave(song)}>Save</button>
                  <button onClick={() => setEditingSong(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {song.title}
                  <SongListItemActions>
                    <SongEditButton onClick={() => handleEdit(song)}>Edit</SongEditButton>
                    <SongDeleteButton onClick={() => handleDelete(song.id)}>Delete</SongDeleteButton>
                  </SongListItemActions>
                </>
              )}
            </SongListItem>
          ))}
        </SongListUl>
      </SongListContainer>
    );
  }
  
  export default SongList;