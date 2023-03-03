import React from "react";

import { UserAlbums } from "components/UserAlbums/UserAlbums";
import { LinkStyled } from "./UserItem.styled";

export const UserItem = ({ userItem }) => {
  return (
    <li key={userItem.id}>
      <p>{userItem.name}</p>
      <p>{userItem.email}</p>
      <p>{userItem.phone}</p>
      <LinkStyled
        to={{
          pathname: "userPost",
          search: `?id=${userItem.id}`,
          state: { user: userItem },
        }}
      >
        Posts
      </LinkStyled>
      <UserAlbums id={userItem.id} />
    </li>
  );
};
