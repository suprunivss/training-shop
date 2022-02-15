import Container from '../../../atoms/Container/Container';
import {
  ButtonWithIcon,
  Wrapper,
  ButtonGroup,
  Logo,
  NavigationLink,
  NavigationItem,
  NavigationList,
  ShoppingCart, Burger,
} from './styles';
import search from '../../../../assets/svg/search.svg';
import globe from '../../../../assets/svg/globe.svg';
import user from '../../../../assets/svg/user.svg';
import shopping from '../../../../assets/svg/shopping-bag.svg';

const Navigation = () => {
  const links = ['About Us', 'Women', 'Men', 'Beauty', 'Accessories', 'Blog', 'Contact'];

  return (
    <Container>
      <Wrapper>
        <Logo>
          CleverShop
        </Logo>
        <nav>
          <NavigationList>
            { links.map((item, index) => (
              <NavigationItem key={ index }>
                <NavigationLink href={ item }>{ item }</NavigationLink>
              </NavigationItem>
            )) }
          </NavigationList>
          <Burger>

          </Burger>
        </nav>
        <ButtonGroup>
          <ButtonWithIcon>
            <img src={ search } alt='search icon'/>
          </ButtonWithIcon>
          <ButtonWithIcon>
            <img src={ globe } alt='globe icon'/>
          </ButtonWithIcon>
          <ButtonWithIcon>
            <img src={ user } alt='user icon'/>
          </ButtonWithIcon>
          <ButtonWithIcon>
            <img src={ shopping } alt='shopping icon'/>
            <ShoppingCart>2</ShoppingCart>
          </ButtonWithIcon>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Navigation;