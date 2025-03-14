import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongsRequest } from '../redux/songs/songsSlice';
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
          <SongListItem key={song.id}>{song.title}</SongListItem>
        ))}
      </SongListUl>
    </SongListContainer>
  );
}

export default SongList;