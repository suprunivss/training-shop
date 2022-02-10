import Container from '../../../components/atoms/Container/Container';
import {
  Banner,
  PreviewWrapper,
  PreviewContainer,
  PreviewContainerLarge,
  SliderStyle,
  SliderWrapper,
  Wrapper,
  InfoItemWrapper, IconInfoImage, TextColumn, WrapperInfo, Title, Text,
} from './styles';
import SliderButton from '../../../components/atoms/SliderButton/SliderButton';
import { sliderButtonTypes } from '../../../components/atoms/SliderButton/constants';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';
import woman from '../../../assets/img/womensPreview.jpg';
import man from '../../../assets/img/mensPreview.jpg';
import accessories from '../../../assets/img/acessories.jpg';
import PreviewCard from '../../../components/atoms/PreviewCard/PreviewCard';
import refresh from '../../../assets/svg/refresh.svg';
import support from '../../../assets/svg/support.svg';
import truck from '../../../assets/svg/truck.svg';
import React from 'react';

const Preview = () => {
  return (
    <Container>
      <Wrapper>
        <SliderWrapper>
          <SliderButton button={ sliderButtonTypes.sliderButtonLeft }/>
          <SliderStyle>
            <Banner>BANNER</Banner>
            <Typography type={ typographyTypes.title_22 } Tag="p">YOUR TITLE TEXT</Typography>
          </SliderStyle>
          <SliderButton button={ sliderButtonTypes.sliderButtonRight }/>
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
        <InfoItemWrapper>
          <IconInfoImage src={ truck } alt="shipping icon"/>
          <TextColumn>
            <Title>
              FREE SHIPPING
            </Title>
            <Text>
              On all UA order or order above $100
            </Text>
          </TextColumn>
        </InfoItemWrapper>
        <InfoItemWrapper>
          <IconInfoImage src={ refresh } alt="shipping icon"/>
          <TextColumn>
            <Title>
              30 DAYS RETURN
            </Title>
            <Text>
              Simply return it within 30 days for an exchange
            </Text>
          </TextColumn>
        </InfoItemWrapper>
        <InfoItemWrapper>
          <IconInfoImage src={ support } alt="shipping icon"/>
          <TextColumn>
            <Title>
              SUPPORT 24/7
            </Title>
            <Text>
              Contact us 24 hours a day, 7 days a week
            </Text>
          </TextColumn>
        </InfoItemWrapper>
      </WrapperInfo>
    </Container>
  );
};

export default Preview;