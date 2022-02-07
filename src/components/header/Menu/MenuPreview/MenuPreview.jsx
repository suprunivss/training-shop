import React from 'react';
import styled from 'styled-components';
import Previews from './Previews/Previews';
import woman from '../assets/img/womensPreview.jpg'
import man from '../assets/img/mensPreview.jpg'
import accessories from '../assets/img/acessories.jpg'

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Div = styled.div`
  display: flex;
  gap: 30px;
`

const MenuPreview = () => {
  return (
    <Style>
      <Div>
        <Previews img={woman} width={'255px'} height={'200px'} text={'woman'}/>
        <Previews img={man} width={'255px'} height={'200px'} text={'men'}/>
      </Div>
      <Previews img={accessories} width={'540px'} height={'260px'} text={'accessories'}/>
    </Style>
  );
};

export default MenuPreview;