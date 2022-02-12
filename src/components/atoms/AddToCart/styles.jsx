import styled from 'styled-components';

export const AddToCartWrapper = styled.button`
  width: 145px;
  height: 40px;
  cursor: pointer;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  background-color: #121212;
  transition: 500ms;
  
  :hover {
    background-color: #E6E6E6;
    color: #121212;
  }
  
  :active {
    background-color: #9C9C9C;
  }
`

export const AddToCartText = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 14.56px;
  letter-spacing: 0.06em;
`