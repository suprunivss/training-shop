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
  CartWrapper, ButtonContainer, CartPriceLineThrough, CartInfoWrapper, CartSale,
} from './styles';
import grey from '../../../assets/img/grey.png';
import black from '../../../assets/img/black.png';
import blue from '../../../assets/img/blue.png';
import white from '../../../assets/img/white.png';
import heart from '../../../assets/svg/heart.svg';
import scale from '../../../assets/svg/scale.svg';

const Cart = ({ items }) => {
  return (
    <CartWrapper>
      <CartImage>
        <img src={ items.image } alt=""/>
        { items.sale
          ? <CartSale>
              <Typography type={typographyTypes.bodyBold} Tag='span' color='#ffffff'>
                -{ items.sale }%
              </Typography>
            </CartSale>
          : null
        }
      </CartImage>
      <CartItemWrapper>
        <CartItem>
          <CartTitle>
            { items.text }
          </CartTitle>
          <CartInfo>
            { items.sale
              ? <CartInfoWrapper>
                <Typography type={ typographyTypes.bodyBold } Tag="span">
                  $ { (items.price * items.sale / 100).toFixed(2) }
                </Typography>
                <CartPriceLineThrough>
                  <Typography type={ typographyTypes.small } Tag="span" color="rgba(18,18,18,0.4)">
                    $ { items.price.toFixed(2) }
                  </Typography>
                </CartPriceLineThrough>
              </CartInfoWrapper>
              : <Typography type={ typographyTypes.bodyBold } Tag="span">$ { items.price.toFixed(2) }</Typography>
            }
            <RatingStars rating={ items.rating }/>
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
              <img src={ heart } alt=""/>
            </ButtonContainer>
            <ButtonContainer>
              <img src={ scale } alt=""/>
            </ButtonContainer>
          </CartButtonsWrapper>
        </CartItem>
      </CartItemWrapper>
    </CartWrapper>
  );
};

export default Cart;