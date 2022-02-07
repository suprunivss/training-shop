import React from 'react';
import menuSliderImage from '../assets/img/sliderMain.jpg'
import styled from 'styled-components';

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 540px;
  height: 490px;
  background-image: url(${ menuSliderImage });
  background-size: cover;
`

const Button1 = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  border: none;
  transition: 500ms;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  ::before {
    position: absolute;
    content: '';
    width: 12px;
    height: 1px;
    border-radius: 50px;
    transform: rotate(45deg);
    background-color: rgba(18, 18, 18, 0.5);
    top: 24px;
    left: 13px;
  }

  ::after {
    position: absolute;
    content: '';
    width: 12px;
    height: 1px;
    border-radius: 50px;
    transform: rotate(-45deg);
    background-color: rgba(18, 18, 18, 0.5);
    top: 16px;
    left: 13px;
  }
`

const Button2 = styled(Button1)`
  ::before {
    transform: rotate(-45deg);
    left: 15px;
  }
  
  ::after {
    transform: rotate(45deg);
    left: 15px;
  }
`


const Div = styled.div`
  background: #ffffff;
  height: 100px;
  width: 289px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`

const Banner = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  color: rgba(18, 18, 18, 0.4);
  text-transform: uppercase;
`

const Title = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
  color: #121212;
  font-style: normal;
  text-transform: uppercase;
`

const MenuSlider = () => {
  return (
    <Style>
      <Button1/>
      <Div>
        <Banner>BANNER</Banner>
        <Title>YOUR TITLE TEXT</Title>
      </Div>
      <Button2/>
    </Style>
  );
};

export default MenuSlider;