import React from 'react';
import styled from 'styled-components';

const Style = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  text-decoration: none;
`

const Li = styled.li`
  list-style: none;
`

const A = styled.a`
  text-decoration: none;
  color: #000000;
  line-height: 16px;
  font-size: 14px;
  transition: 300ms;
  padding: 15px 7px;
  
  :hover {
    color: #9C9C9C;
  }
`

const Nav = () => {
  const links = ['About Us', 'Women', 'Men', 'Beauty', 'Accessories', 'Blog', 'Contact']

  return (
    <nav>
      <Style>
        {links.map((item, index) => {
          return <Li key={index}>
            <A href={item}>{item}</A>
          </Li>
        })}
      </Style>
    </nav>
  );
};

export default Nav;