import React from 'react';
import { sliderButtonTypes } from './constants';
import styled from 'styled-components';

const ButtonLeft = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  transition: 500ms;

  &:hover {
    cursor: pointer;
    background-color: rgba(230, 230, 230, 0.6);
    border-radius: 50%;
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
`;

const ButtonRight = styled(ButtonLeft)`
  transform: rotate(180deg);
`;

const ButtonTop = styled(ButtonLeft)`
  transform: rotate(90deg);
`;

const ButtonBottom = styled(ButtonLeft)`
  transform: rotate(270deg);
`;

const SliderButton = ({ button }) => {
  switch (button) {
    case sliderButtonTypes.sliderButtonRight:
      return <ButtonRight/>
    case sliderButtonTypes.sliderButtonLeft:
      return <ButtonLeft/>
    case sliderButtonTypes.sliderButtonTop:
      return <ButtonTop/>
    case sliderButtonTypes.sliderButtonBottom:
      return <ButtonBottom/>
    default:
      return <ButtonLeft/>
  }
};

export default SliderButton;