import { Item, Link, List, Title, Wrapper } from './styles';
import Typography from '../../../../atoms/Typography/Typography';
import { typographyTypes } from '../../../../atoms/Typography/constants';

const LinksGroup = ({ title, link }) => {
  return (
    <Wrapper>
      <Title>
        <Typography type={ typographyTypes.subtitle } Tag="span">{ title }</Typography>
      </Title>
      <List>
        { link?.map((item, index) => {
          const items = item.replace(/[^a-zа-яё]/gi, '');

          return (
            <Item key={ index }>
              <Link href={ items }>
                <Typography type={typographyTypes.body} Tag='span' color='rgba(18, 18, 18, 0.7)'>
                  { item }
                </Typography>
              </Link>
            </Item>
          );
        }) }
      </List>
    </Wrapper>
  );
};

export default LinksGroup;