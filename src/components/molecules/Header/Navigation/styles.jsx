import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  text-decoration: none;
`;

export const NavigationItem = styled.li`
  list-style: none;
`;

export const NavigationLink = styled.a`
  text-decoration: none;
  color: #000000;
  transition: 300ms;
  padding: 15px 7px;

  &:hover {
    color: #9C9C9C;
  }
`;

export const Logo = styled.p`
  font-family: 'Playfair Display SC', serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;

  @media(max-width: 1200px) {
    display: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const ButtonWithIcon = styled.button`
  transition: 500ms;
  background: none;
  border: none;
  position: relative;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const ShoppingCart = styled.span`
  position: absolute;
  content: '';
  left: 10px;
  bottom: 18px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  background-color: #000000;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 9px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;