import React from 'react';
import styled from 'styled-components';
import BarContact from './BarContact/BarContact';
import BarSocial from './BarSocial/BarSocial';

const Style = styled.div`
  background: #000000;
  width: 100vw;
  color: #ffffff;
`
const Container = styled.div`
  height: 24px;
  margin: 0 auto;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Bar = () => {
  return (
    <Style>
      <Container>
        <BarContact/>

        <BarSocial/>
      </Container>
    </Style>
  );
};

export default Bar;