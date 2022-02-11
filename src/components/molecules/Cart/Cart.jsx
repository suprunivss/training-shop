import Typography from '../../atoms/Typography/Typography';
import { typographyTypes } from '../../atoms/Typography/constants';
import RatingStars from '../../atoms/RatingStars/RatingStars';
import AddToCart from '../../atoms/AddToCart/AddToCart';

import {
  CartButtonsWrapper,
  CartColor, CartColorButton,
  CartImage,
  CartInfo,
  CartItem,
  CartItemWrapper,
  CartSize,
  CartSizeButton,
  CartTitle,
  CartWrapper, ButtonContainer,
} from './styles';
import image from '../../../assets/img/Rectangle 1.png';
import grey from '../../../assets/img/grey.png';
import black from '../../../assets/img/black.png';
import blue from '../../../assets/img/blue.png';
import white from '../../../assets/img/white.png';
import heart from '../../../assets/svg/heart.svg';
import scale from '../../../assets/svg/scale.svg';

const Cart = () => {
  return (
    <CartWrapper>
      <CartImage>
        <img src={ image } alt=""/>
      </CartImage>
      <CartItemWrapper>
        <CartItem>
          <CartTitle>
            Women's tracksuit Q109
          </CartTitle>
          <CartInfo>
            <Typography type={ typographyTypes.bodyBold } Tag="span">$ 30.00</Typography>
            <RatingStars rating="4"/>
          </CartInfo>
          <CartColor>
            <CartColorButton>
              <img src={ blue } alt="blue color"/>
            </CartColorButton>
            <CartColorButton>
              <img src={ white } alt="white color"/>
            </CartColorButton>
            <CartColorButton>
              <img src={ black } alt="black color"/>
            </CartColorButton>
            <CartColorButton>
              <img src={ grey } alt="grey color"/>
            </CartColorButton>
          </CartColor>
          <CartSize>
            <CartSizeButton>
              <Typography type={ typographyTypes.small } Tag="span">XS</Typography>
            </CartSizeButton>
            <CartSizeButton>
              <Typography type={ typographyTypes.small } Tag="span">S</Typography>
            </CartSizeButton>
            <CartSizeButton>
              <Typography type={ typographyTypes.small } Tag="span">M</Typography>
            </CartSizeButton>
            <CartSizeButton>
              <Typography type={ typographyTypes.small } Tag="span">L</Typography>
            </CartSizeButton>
          </CartSize>
          <CartButtonsWrapper>
            <AddToCart/>
            <ButtonContainer>
              <img src={heart} alt=""/>
            </ButtonContainer>
            <ButtonContainer>
              <img src={scale} alt=""/>
            </ButtonContainer>
          </CartButtonsWrapper>
        </CartItem>
      </CartItemWrapper>
    </CartWrapper>
  );
};

export default Cart;