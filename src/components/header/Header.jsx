import React from 'react';
import Bar from './Bar/Bar';
import Navigation from './Navigation/Navigation';
import styled from 'styled-components';
import Menu from './Menu/Menu';

const Style = styled.div`
  height: 90px;
  border-bottom: 2px solid #f8f8f8;
`

const Header = () => {
  return (
    <Style>
      <Bar/>
      <Navigation/>
      <Menu/>
    </Style>
  );
};

export default Header;