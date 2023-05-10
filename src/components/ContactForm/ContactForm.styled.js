import styled from '@emotion/styled';

export const Form = styled.form`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #317cd1;
  border-radius: 6px;
  box-shadow: 0px 2px 5px lightslategray;
  padding: 20px 50px;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  font-weight: 700;
`;

export const Input = styled.input`
  margin-top: 8px;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0px 2px 5px lightslategray;

  :hover,
  :active {
    border: 2px solid green;
  }
`;

export const Button = styled.button`
  margin: 25px 0 8px 0;
  border-radius: 20px;
  box-shadow: 0px 2px 5px lightslategray;
  height: 40px;
  width: 105px;
  background-color: #fff;
  font-weight: 700;

  :hover {
    border-color: green;
  }
`;
