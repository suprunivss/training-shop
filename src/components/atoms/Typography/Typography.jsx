import React from 'react';
import { typographyTypes } from './constants';
import styled from 'styled-components';

const Title36 = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.06em;
`
const Title26 = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 26px;
  line-height: 36px;
  letter-spacing: 0.06em;
`
const Title22 = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.06em;
`
const Title16 = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.06em;
`
const Title14 = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.06em;
`
const Subtitle = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.06em;
`
const Body = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
`
const BodyBold = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
`
const Small = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 11px;
  line-height: 18px;
`
const Button = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 13px;
  line-height: 14.56px;
  letter-spacing: 0.06em;
  text-align: center;
`

const Typography = ({type, Tag, children}) => {
  switch (type) {
    case typographyTypes.title_36:
      return <Tag><Title36>{children}</Title36></Tag>

    case typographyTypes.title_26:
      return <Tag><Title26>{children}</Title26></Tag>

    case typographyTypes.title_22:
      return <Tag><Title22>{children}</Title22></Tag>

    case typographyTypes.title_16:
      return <Tag><Title16>{children}</Title16></Tag>

    case typographyTypes.title_14:
      return <Tag><Title14>{children}</Title14></Tag>

    case typographyTypes.subtitle:
      return <Tag><Subtitle>{children}</Subtitle></Tag>

    case typographyTypes.body:
      return <Tag><Body>{children}</Body></Tag>

    case typographyTypes.bodyBold:
      return <Tag><BodyBold>{children}</BodyBold></Tag>

    case typographyTypes.small:
      return <Tag><Small>{children}</Small></Tag>

    case typographyTypes.button:
      return <Tag><Button>{children}</Button></Tag>

    default:
      return <Tag><Title14>{children}</Title14></Tag>
  }
};

export default Typography;