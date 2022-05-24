import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  border: none;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 20px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  font-weight: 400;
  margin-bottom: 25px;
  text-align: center;
`;
