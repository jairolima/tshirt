import styled from 'styled-components'


export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || ''};
  justify-content: ${props => props.justify || ''};
  margin-top: ${props => props.mt || ''};
`;