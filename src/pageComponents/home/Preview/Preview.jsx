import Container from '../../../components/atoms/Container/Container';
import { Banner, PreviewWrapper, PreviewContainer, PreviewContainerLarge, SliderStyle, SliderWrapper, Wrapper } from './styles';
import SliderButton from '../../../components/atoms/SliderButton/SliderButton';
import { sliderButtonTypes } from '../../../components/atoms/SliderButton/constants';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';
import woman from '../../../assets/img/womensPreview.jpg';
import man from '../../../assets/img/mensPreview.jpg';
import accessories from '../../../assets/img/acessories.jpg';
import PreviewCard from '../../../components/atoms/PreviewCard/PreviewCard';

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
            <PreviewCard img={ woman }>WOMAN</PreviewCard>
          </PreviewContainer>
          <PreviewContainer>
            <PreviewCard img={ man }>MEN</PreviewCard>
          </PreviewContainer>
          <PreviewContainerLarge>
            <PreviewCard img={ accessories }>ACCESSORIES</PreviewCard>
          </PreviewContainerLarge>
        </PreviewWrapper>
      </Wrapper>
    </Container>
  );
};

export default Preview;