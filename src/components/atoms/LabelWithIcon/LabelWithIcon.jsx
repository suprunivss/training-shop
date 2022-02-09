import React from 'react';
import { Wrapper, Image } from './styles';
import Typography from '../Typography/Typography';
import { typographyTypes } from '../Typography/constants';

const LabelWithIcon = ({ img, text }) => {
  return (
    <Wrapper>
      <Image src={ img }/>
      <Typography type={ typographyTypes.small } Tag="p">{ text }</Typography>
    </Wrapper>
  );
};

export default LabelWithIcon;