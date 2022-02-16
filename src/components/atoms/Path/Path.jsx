import {
  Arrow, ArrowInactive, Content,
  ContentPath, Image, Info,
  PagesPath, Share,
  StyledLink,
  StyledLinkHome, StyledLinkInactive, Title, TitleProduct, TitleProductWrapper,
  Wrapper,
} from './styles';
import Container from '../Container/Container';
import share from '../../../assets/svg/share.svg';
import Typography from '../Typography/Typography';
import { typographyTypes } from '../Typography/constants';

const Path = ({ link, title }) => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <ContentPath>
            <PagesPath>
              <StyledLinkHome to="/">Home</StyledLinkHome>
              { title
                ?
                <>
                  <ArrowInactive></ArrowInactive>
                  <StyledLinkInactive to={ `/${ link }` }>{ link }</StyledLinkInactive>
                  <Arrow></Arrow>
                  <StyledLink to={ `/${ link }/${ title }` }>{ title }</StyledLink>
                </>
                :
                <>
                  <Arrow/>
                  <StyledLink to={ `/${ link }` }>{ link }</StyledLink>
                </>
              }
            </PagesPath>
            <Share>
              <Image src={ share } alt="share"/>
              <Typography type={ typographyTypes.small } Tag="span" color="rgba(18, 18, 18, 0.6)">Share</Typography>
            </Share>
          </ContentPath>
          { title
            ?
            <TitleProduct>
              <TitleProductWrapper>
                <Typography type={ typographyTypes.title_26 } Tag="h2">
                  { title }
                </Typography>
                <Info>

                </Info>
              </TitleProductWrapper>
            </TitleProduct>
            :
            <Title>
              <Typography type={ typographyTypes.title_26 } Tag="h2">
                { link.toUpperCase() }
              </Typography>
            </Title>
          }
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Path;