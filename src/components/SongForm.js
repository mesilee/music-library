/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSongRequest } from '../redux/songs/songsSlice';
import styled from '@emotion/styled';

const FormContainer = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  margin-bottom: 20px;
`;

const FormTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

function SongForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSongRequest({ title }));
    setTitle('');
  };

  return (
    <FormContainer>
      <FormTitle>Add New Song</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormButton type="submit">Add Song</FormButton>
      </form>
    </FormContainer>
  );
}

export default SongForm;