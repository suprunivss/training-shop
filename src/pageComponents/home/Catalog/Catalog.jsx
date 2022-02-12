import Cart from '../../../components/molecules/Cart/Cart';
import Container from '../../../components/atoms/Container/Container';
import {
  CatalogButton,
  CatalogItems,
  CatalogTitle,
  CatalogTitleButton,
  CatalogTitleNav,
  CatalogWrapper,
} from './styles';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';

const Catalog = ({ section, title }) => {
  return (
    <CatalogWrapper>
      <Container>
        <CatalogTitle>
          <Typography type={ typographyTypes.title_22 } Tag="span">{ title }</Typography>
          <CatalogTitleNav>
            <CatalogTitleButton>
              <Typography type={ typographyTypes.body } Tag="span">NEW ARRIVALS</Typography>
            </CatalogTitleButton>
            <CatalogTitleButton>
              <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.6)">SPECIALS</Typography>
            </CatalogTitleButton>
            <CatalogTitleButton>
              <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.6)">BESTSELLER</Typography>
            </CatalogTitleButton>
            <CatalogTitleButton>
              <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.6)">MOST
                VIEWED</Typography>
            </CatalogTitleButton>
            <CatalogTitleButton>
              <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.6)">FEATURED
                PRODUCTS</Typography>
            </CatalogTitleButton>
          </CatalogTitleNav>
        </CatalogTitle>
        <CatalogItems>
          { section.map(item => {
            return (
              <Cart items={ item } key={ item.id }/>
            );
          }) }
        </CatalogItems>
        <CatalogButton>
          <Typography type={typographyTypes.button} Tag='span' color='rgba(18, 18, 18, 0.8)'>
            SEE ALL
          </Typography>
        </CatalogButton>
      </Container>
    </CatalogWrapper>
  );
};

export default Catalog;