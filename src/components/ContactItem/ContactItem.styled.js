import styled from '@emotion/styled';

export const Item = styled.li`
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  :hover {
    border: 2px solid greenyellow;
  }
`;

export const Name = styled.p`
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  border-radius: 20px;
  box-shadow: 0px 2px 5px lightgrey;
  background-color: #5499c7;
  padding: 7px 12px;
  font-weight: 600;

  :hover {
    font-weight: 700;
    color: #f00;
    padding: 8px 14px;
    background-color: #18d3a8;
  }
`;

export const Span = styled.span`
  font-weight: 600;
`;
