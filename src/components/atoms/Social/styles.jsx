import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

export const SocialLink = styled.a`
  transition: 500ms;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.2);
  }
`