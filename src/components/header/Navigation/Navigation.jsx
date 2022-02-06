import React from 'react';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import NavMenu from './NavMenu/NavMenu';

const Container = styled.div`
  height: 64px;
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = () => {
  return (
    <Container>
      <Logo/>
      <Nav/>
      <NavMenu/>
    </Container>
  );
};

export default Navigation;