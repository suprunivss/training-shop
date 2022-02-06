import React from 'react';
import styled from 'styled-components';
import MenuSlider from './MenuSlider/MenuSlider';

const Section = styled.section`
  max-width: 1140px;
  padding: 32px 15px 0;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`

const Menu = () => {
  return (
    <Section>
      <MenuSlider/>
      <MenuSlider/>
    </Section>
  );
};

export default Menu;