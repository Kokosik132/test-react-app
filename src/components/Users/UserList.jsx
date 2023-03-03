import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "redux/users/selectors";

import { UserItem } from "./UserItem/UserItem";
import { CardWrapper } from "./UserList.styled";

export default function UserList() {
  const userList = useSelector(selectUsers);

  return (
    <CardWrapper>
      {userList.map((item) => (
        <UserItem userItem={item} />
      ))}
    </CardWrapper>
  );
}
