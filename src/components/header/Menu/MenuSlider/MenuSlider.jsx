import React from 'react';
import styled from 'styled-components';
import menuSliderImage from '../assets/img/sliderMain.jpg'

const Style = styled.div`
  
`

const Img = styled.img`
  width: 100%;
  height: auto;
`

const MenuSlider = () => {
  return (
    <Style>
      <Img src={menuSliderImage} alt="sdf" height="490" width="540"/>
    </Style>
  );
};

export default MenuSlider;