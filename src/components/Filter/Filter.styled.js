import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
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
