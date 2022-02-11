import { AddToCartWrapper } from './styles';
import Typography from '../Typography/Typography';
import { typographyTypes } from '../Typography/constants';

const AddToCart = () => {
  return (
    <AddToCartWrapper>
      <Typography type={typographyTypes.small} Tag='span' color='rgba(255, 255, 255, 0.9)'>ADD TO CART</Typography>
    </AddToCartWrapper>
  );
};

export default AddToCart;