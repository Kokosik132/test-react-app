import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers } from 'redux/users/operations';
import { getAllAlbums } from 'redux/albums/operations';

import UserList from 'components/Users/UserList';
import { PageContainer } from './PageContainer.styled.js';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllAlbums());
  }, [dispatch]);

  return (
    <>
      <PageContainer>
        <h1>User Posts</h1>
        <UserList />
      </PageContainer>
    </>
  );
}
