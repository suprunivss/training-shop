import React from 'react';
import styled from 'styled-components';

const Style = styled.p`
  font-family: 'Playfair Display SC', serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`

const Logo = () => {
  return (
    <Style>
      CleverShop
    </Style>
  );
};

export default Logo;