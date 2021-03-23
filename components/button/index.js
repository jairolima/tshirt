import styled from 'styled-components'


export const Button = styled.button`
  color: ${props => props.color || "white"};
  background: ${props => props.bgColor || "black"};
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;