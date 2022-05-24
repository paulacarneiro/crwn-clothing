import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 30px auto;

  & > *:first-child {
    margin-right: 40px;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    text-align: center;

    & > *:first-child {
      margin-right: unset;
      margin-bottom: 40px;
    }
  }
`;
