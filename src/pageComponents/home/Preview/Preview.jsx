import Container from '../../../components/atoms/Container/Container';
import SliderButton from '../../../components/atoms/SliderButton/SliderButton';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';
import PreviewCard from '../../../components/atoms/PreviewCard/PreviewCard';
import PreviewItem from './PreviewItem/PreviewItem';
import {
  PreviewWrapper,
  PreviewContainer,
  PreviewContainerLarge,
  SliderStyle,
  SliderWrapper,
  Wrapper, WrapperInfo, PreviewSection,
} from './styles';

import refresh from '../../../assets/svg/refresh.svg';
import support from '../../../assets/svg/support.svg';
import truck from '../../../assets/svg/truck.svg';
import woman from '../../../assets/img/womensPreview.jpg';
import man from '../../../assets/img/mensPreview.jpg';
import accessories from '../../../assets/img/acessories.jpg';

const Preview = () => {
  return (
    <PreviewSection>
      <Container>
        <Wrapper>
          <SliderWrapper>
            <SliderButton type="left"/>
            <SliderStyle>
              <Typography type={ typographyTypes.subtitle } Tag="span" color="#a0a0a0">BANNER</Typography>
              <Typography type={ typographyTypes.title_22 } Tag="span">YOUR TITLE TEXT</Typography>
            </SliderStyle>
            <SliderButton type="right"/>
          </SliderWrapper>
          <PreviewWrapper>
            <PreviewContainer>
              <PreviewCard img={ woman }>WOMEN</PreviewCard>
            </PreviewContainer>
            <PreviewContainer>
              <PreviewCard img={ man }>MEN</PreviewCard>
            </PreviewContainer>
            <PreviewContainerLarge>
              <PreviewCard img={ accessories }>ACCESSORIES</PreviewCard>
            </PreviewContainerLarge>
          </PreviewWrapper>
        </Wrapper>

        <WrapperInfo>
          <PreviewItem image={ truck } title="FREE SHIPPING" text="On all UA order or order above $100"/>
          <PreviewItem image={ refresh } title="30 DAYS RETURN" text="Simply return it within 30 days for an exchange"/>
          <PreviewItem image={ support } title="SUPPORT 24/7" text="Contact us 24 hours a day, 7 days a week"/>
        </WrapperInfo>
      </Container>

    </PreviewSection>

  );
};

export default Preview;