import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  & > span {
    width: 23%;
  }

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;

    & > span {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 500px) {
    padding-right: 0;
    justify-content: center;
  }
`;

export const Quantity = styled.span`
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const RemoveButton = styled.div`
  width: 10%;
  padding-left: 12px;
  cursor: pointer;
`;
