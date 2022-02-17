import { Buttons, ProductWrapper, TitleWrapper, Wrapper } from './styled';
import Typography from '../../../atoms/Typography/Typography';
import { typographyTypes } from '../../../atoms/Typography/constants';
import SliderButton from '../../../atoms/SliderButton/SliderButton';
import related1 from '../../../../assets/img/related1.png';
import related2 from '../../../../assets/img/related2.png';
import related3 from '../../../../assets/img/related3.png';
import related4 from '../../../../assets/img/related4.png';
import CardProduct from '../../CardProduct/CardProduct';

const Related = () => {
  const related = [{
    id: 1,
    price: 30,
    image: related1,
    text: 'Women`s tracksuit Q109',
    rating: 2,
  },
    {
      id: 2,
      price: 30,
      image: related2,
      text: 'Women`s tracksuit Q109',
      rating: 5,
      sale: 40,
    },
    {
      id: 3,
      price: 30,
      image: related3,
      text: 'Women`s tracksuit Q109',
      rating: 3,
    },
    {
      id: 4,
      price: 30,
      image: related4,
      text: 'Women`s tracksuit Q109',
      rating: 1,
    }];

  return (
    <Wrapper>
      <TitleWrapper>
        <Typography type={ typographyTypes.title_22 } Tag="span">
          RELATED PRODUCTS
        </Typography>
        <Buttons>
          <SliderButton type="left"/>
          <SliderButton type="right"/>
        </Buttons>
      </TitleWrapper>
      <ProductWrapper>
        {
          related.map(item => {
            return (
              <CardProduct link='women' id={ item.id } key={ item.id } image={ item.image } price={ item.price }
                           rating={ item.rating } sale={item.sale} text={item.text}/>
            );
          })
        }
      </ProductWrapper>
    </Wrapper>
  );
};

export default Related;