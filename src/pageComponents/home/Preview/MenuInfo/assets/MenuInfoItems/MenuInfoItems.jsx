import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1140px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Img = styled.img`
  width: 30px;
  height: 30px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuInfoItems = ({items}) => {
  return (
    <Container>
      {items.map((item, index) => {
        return (
          <Style key={index}>
            <Img src={item.image} alt=""/>
            <Column>
              <h2>
                {item.header}
              </h2>
              <p>
                {item.desc}
              </p>
            </Column>
          </Style>
        )
      })}
    </Container>
  );
};

export default MenuInfoItems;