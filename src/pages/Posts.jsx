import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectUsersPosts } from 'redux/userPost/selectors';
import { getAllPost } from 'redux/userPost/operations';

import { filterPostsById } from 'utils/filterUserPostById';
import UserPost from 'components/UserPost/UserPost';
import { PageContainer } from './PageContainer.styled.js';

export default function Posts() {
  const userPost = useSelector(selectUsersPosts);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('id');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  const userPostById = filterPostsById(userPost, userId);

  return (
    <PageContainer>
      <UserPost posts={userPostById} />
    </PageContainer>
  );
}
