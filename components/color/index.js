import styled from 'styled-components'


export const Color = styled.div`
  background: ${props => props.bgColor || "black"};
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;