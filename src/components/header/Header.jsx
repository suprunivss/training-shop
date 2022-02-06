import React from 'react';
import styled from 'styled-components';
import Bar from './Bar/Bar';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = () => {
  return (
    <HeaderStyle>
      <Bar/>
    </HeaderStyle>
  );
};

export default Header;