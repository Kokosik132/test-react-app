import styled from "styled-components";

export const CardWrapper = styled.ul`
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
  list-style: none;

  li {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: scale(1.02);
    }

    p {
      margin: 0;
      font-size: 16px;
      line-height: 1.5;
      color: #333;
    }

    div {
      margin-top: 20px;
      display: flex;
    }
  }
`;
