import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(NavLink)`
  margin-top: 10px;
  color: #0077cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
