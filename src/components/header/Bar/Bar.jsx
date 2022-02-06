import React from 'react';
import styled from 'styled-components';
import Contact from './Contacts/Contact';
import Social from './Social/Social';

const Style = styled.div`
  background: #000000;
  width: 100vw;
  color: #ffffff;
`
const Container = styled.div`
  height: 24px;
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Bar = () => {
  return (
    <Style>
      <Container>
        <Contact/>
        <Social/>
      </Container>
    </Style>
  );
};

export default Bar;