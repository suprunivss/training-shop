import React from 'react';
import styled from 'styled-components';

const Previews = ({ img, width, height, text }) => {
  const Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${ img });
    width: ${ width };
    height: ${ height };
    background-size: cover;
  `;

  const Button = styled.button`
    background: #ffffff;
    padding: 13px 24px;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: 500ms;

    :hover {
      padding: 13px 50%;
      border-radius: 0;
    }

    :active {
      background-color: rgba(255, 255, 255, 0.7);
    }
  `;

  const P = styled.p`
    font-weight: 600;
    text-transform: uppercase;
    line-height: 22px;
    letter-spacing: 0.06em;
    font-style: normal;
  `;

  return (
    <Style>
      <Button>
        <P>
          { text }
        </P>
      </Button>
    </Style>
  );
};

export default Previews;