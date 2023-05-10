import styled from '@emotion/styled';

export const Div = styled.div`
  display: block;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const MobileButton = styled.button`
  display: none;
`;

export const Button = styled.button`
  margin-left: auto;
  padding: 10px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  color: black;
  font-weight: 600;
  font-size: inherit;
  cursor: pointer;

  :hover {
    padding: 12px;
    font-weight: 800;
  }
`;

export const NameWrap = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 20px;

  :hover {
    color: #fffb00;
  }
`;
