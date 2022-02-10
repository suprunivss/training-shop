import React from 'react';
import styled from 'styled-components';
import refresh from '../../../../assets/svg/refresh.svg';
import support from '../../../../assets/svg/support.svg';
import truck from '../../../../assets/svg/truck.svg';
import MenuInfoItems from './assets/MenuInfoItems/MenuInfoItems';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuInfo = () => {
  const items = [{ image: truck, header: 'FREE SHIPPING', desc: 'On all UA order or order above $100' },
    {image: refresh, header: '30 DAYS RETURN', desc: 'Simply return it within 30 days for an exchange'},
    {image: support, header: 'SUPPORT 24/7', desc: 'Contact us 24 hours a day, 7 days a week'}];

  return (
    <Container>
      <MenuInfoItems items={items}/>
    </Container>
  );
};

export default MenuInfo;