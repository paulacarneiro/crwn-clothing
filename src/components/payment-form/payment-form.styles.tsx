import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  width: 500px;

  h2 {
    white-space: nowrap;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const PaymentButton = styled(Button)`
  margin: 40px auto;
`;
