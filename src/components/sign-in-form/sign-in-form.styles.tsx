import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  h2 {
    margin: 10px 0;
  }

  span {
    font-size: small;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  /* justify-content: space-between; */
  & > * {
    width: 100%;
    margin: 0 10px;
    /* width: 45%; */
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    & > * {
      margin: 10px auto;
    }
  }

  @media screen and (max-width: 8000px) {
    & > * {
      margin: 5px auto;
    }
  }
`;
