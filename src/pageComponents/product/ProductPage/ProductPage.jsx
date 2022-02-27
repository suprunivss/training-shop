import Container from '../../../components/atoms/Container/Container';
import {
  Content, SliderButtonLeft, SliderButtonRight,
  SliderWrapper,
  Wrapper,
} from './styles';
import SliderButton from '../../../components/atoms/SliderButton/SliderButton';
import Divider from '../../../components/atoms/Divider/Divider';
import Color from './Color/Color';
import Size from './Size/Size';
import Price from './Price/Price';
import Guarantees from './Guarantees/Guarantees';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';
import Related from './Related/Related';
import Additional from './Additional/Additional';
import Reviews from './Reviews/Reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import slider from '../../../assets/img/sliderimage.png';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductPage = ({ link }) => {
  const [sliderStart, setSliderStart] = useState(true);
  const [sliderEnd, setSliderEnd] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container>
      <Wrapper data-test-id={ `product-page-${ link.toLowerCase() }` }>
        <SliderWrapper>
          <div style={{zIndex: '1'}}>
            <SliderButton className='sliderTop' disabled={ sliderStart } type="top"/>
            <SliderButton className='sliderBottom' disabled={ sliderEnd } type="bottom"/>
          </div>
          <Swiper
            onSwiper={ setThumbsSwiper }
            slidesPerView={ 4 }
            navigation={{
              nextEl: '.sliderTop',
              prevEl: '.sliderBottom'
            }}
            freeMode={ true }
            watchSlidesProgress={ true }
            modules={ [FreeMode, Navigation, Thumbs] }
            direction={ 'vertical' }
            onSlideChange={ (swiper) => {
              if (swiper.isBeginning) {
                setSliderStart(true);
                setSliderEnd(false);
                return;
              }
              if (swiper.isEnd) {
                setSliderEnd(true);
                setSliderStart(false);
                return;
              }
              setSliderStart(false);
              setSliderEnd(false);
            } }
          >
            <SwiperSlide style={{width: '94px', height: '114px'}}>
              <img style={{width: '94px', height: '114px'}} src={slider} alt="slider"/>
            </SwiperSlide>
            <SwiperSlide style={{width: '94px', height: '114px'}}>
              <img style={{width: '94px', height: '114px'}} src={slider} alt="slider"/>
            </SwiperSlide>
            <SwiperSlide style={{width: '94px', height: '114px'}}>
              <img style={{width: '94px', height: '114px'}} src={slider} alt="slider"/>
            </SwiperSlide>
            <SwiperSlide style={{width: '94px', height: '114px'}} src={slider}>
              <img style={{width: '94px', height: '114px'}} src={slider} alt="slider"/>
            </SwiperSlide>
          </Swiper>
          <Swiper
            style={ {
              width: '448px'
            } }
            spaceBetween={ 10 }
            thumbs={ { swiper: thumbsSwiper } }
            modules={ [FreeMode, Navigation, Thumbs] }
            onSlideChange={ (swiper) => {
              if (swiper.isBeginning) {
                setSliderStart(true);
                setSliderEnd(false);
                return;
              }
              if (swiper.isEnd) {
                setSliderEnd(true);
                setSliderStart(false);
                return;
              }
              setSliderStart(false);
              setSliderEnd(false);
            } }
          >
            <SwiperSlide>
              <img src={slider} alt="slider"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt="slider"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt="slider"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt="slider"/>
            </SwiperSlide>
            <SliderButtonLeft>
              <SliderButton disabled={ sliderStart } type="left"/>
            </SliderButtonLeft>
            <SliderButtonRight>
              <SliderButton disabled={ sliderEnd } type="right"/>
            </SliderButtonRight>
          </Swiper>
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