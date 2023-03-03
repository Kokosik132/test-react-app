import styled from "styled-components";

export const PageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    max-width: 300px;
  }

  @media (min-width: 481px) and (max-width: 800px) {
    max-width: 600px;
  }

  @media (min-width: 801px) and (min-width: 1280px) {
    max-width: 1200px;
  }

  @media (min-width: 1281px) {
    width: 1200px;
  }
`;
