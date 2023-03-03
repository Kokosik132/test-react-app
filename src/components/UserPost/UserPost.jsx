import React from "react";

import {
  BtnGoBack,
  StyledUl,
  PostCard,
  PostTitle,
  PostBody,
} from "./UserPost.styled";

export default function UserPost({ posts }) {
  return (
    <>
      <BtnGoBack to="/">Go Back</BtnGoBack>

      <StyledUl>
        {posts.map((item) => (
          <PostCard key={item.id}>
            <PostTitle>{item.title}</PostTitle>
            <PostBody>{item.body}</PostBody>
          </PostCard>
        ))}
      </StyledUl>
    </>
  );
}
