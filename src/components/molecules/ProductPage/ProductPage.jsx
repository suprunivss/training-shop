import Container from '../../atoms/Container/Container';
import {
  ButtonPreview,
  Content,
  SliderImage,
  SliderPreview,
  SliderWrapper,
  Wrapper,
} from './styles';
import preview1 from '../../../assets/img/sliderpreview1.png';
import preview2 from '../../../assets/img/sliderpreview2.png';
import preview3 from '../../../assets/img/sliderpreview3.png';
import preview4 from '../../../assets/img/sliderpreview4.png';
import SliderButton from '../../atoms/SliderButton/SliderButton';
import Divider from '../../atoms/Divider/Divider';
import Color from './Color/Color';
import Size from './Size/Size';
import Price from './Price/Price';
import Guarantees from './Guarantees/Guarantees';
import Typography from '../../atoms/Typography/Typography';
import { typographyTypes } from '../../atoms/Typography/constants';
import Related from './Related/Related';
import Additional from './Additional/Additional';
import Reviews from './Reviews/Reviews';

const ProductPage = ({ link }) => {
  return (
    <Container>
      <Wrapper data-test-id={ `product-page-${ link.toLowerCase() }` }>
        <SliderWrapper>
          <SliderPreview>
            <ButtonPreview>
              <SliderButton type="top"/>
              <SliderButton type="bottom"/>
            </ButtonPreview>
            <img src={ preview1 } alt="preview"/>
            <img src={ preview2 } alt="preview"/>
            <img src={ preview3 } alt="preview"/>
            <img src={ preview4 } alt="preview"/>
          </SliderPreview>
          <SliderImage>
            <SliderButton type="left"/>
            <SliderButton type="right"/>
          </SliderImage>
        </SliderWrapper>
        <Content>
          <Color/>
          <Size/>
          <Divider/>
          <Price/>
          <Divider/>
          <Guarantees/>
          <Divider/>
          <Typography type={ typographyTypes.subtitle } Tag="span" color="rgba(18,18,18,0.6)">
            DESCRIPTION
          </Typography>
          <Divider/>
          <Additional/>
          <Divider/>
          <Reviews/>
          <Divider/>
        </Content>
      </Wrapper>
      <Related/>
    </Container>
  );
};

export default ProductPage;