import { ButtonStyled } from './styles';
import { useSwiper } from 'swiper/react';

const SliderButton = ({ type, disabled }) => {
  const swiper = useSwiper();
  const onClick = () => {
    switch (type) {
      case 'right':
        swiper.slideNext();
        return;
      case 'left':
        swiper.slidePrev();
        return;
    }
  };

  return <ButtonStyled disabled={ disabled } onClick={ onClick } type={ type }/>;
};

export default SliderButton;
