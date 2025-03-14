import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongsRequest, updateSongRequest } from '../redux/songs/songsSlice';
import styled from '@emotion/styled';

const SongListContainer = styled.div`
  padding: 20px;
  font-family: sans-serif;
`;

const SongListTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const SongListUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const SongListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
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
  
    return (
      <SongListContainer>
        <SongListTitle>Song List</SongListTitle>
        <SongListUl>
          {songs.map((song) => (
            <SongListItem key={song.id}>
              {editingSong && editingSong.id === song.id ? (
                <> {/* Use a fragment here */}
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <button onClick={() => handleSave(song)}>Save</button>
                  <button onClick={() => setEditingSong(null)}>Cancel</button>
                </>
              ) : (
                <> {/* And here */}
                  {song.title}
                  <button onClick={() => handleEdit(song)}>Edit</button>
                </>
              )}
            </SongListItem>
          ))}
        </SongListUl>
      </SongListContainer>
    );
  
    function handleEdit(song) {
      setEditingSong(song);
      setEditedTitle(song.title);
    }
  
    function handleSave(song) {
      dispatch(updateSongRequest({ id: song.id, title: editedTitle }));
      setEditingSong(null);
    }
  }
  
  export default SongList;