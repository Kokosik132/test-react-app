import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BtnGoBack = styled(NavLink)`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 15px;
  text-decoration: none;
  color: #333333;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #cccccc;
    color: #ffffff;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr;
  margin: 20px;
  padding: 0;

  @media (min-width: 481px) and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 801px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PostCard = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    transform: scale(1.01);
  }
`;

export const PostTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px;
`;

export const PostBody = styled.p`
  font-size: 16px;
  margin: 0;
`;
