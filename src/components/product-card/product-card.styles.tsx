import styled from 'styled-components';

import Button from '../button/button.component';

export const AddToCartButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    padding: 0 5%;
  }
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  /* button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  } */

  &:hover {
    img {
      opacity: 0.8;
    }

    ${AddToCartButton} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    &:hover {
      img {
        opacity: unset;
      }

      ${AddToCartButton} {
        opacity: unset;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 0 10px;
  margin-bottom: 15px;
`;
