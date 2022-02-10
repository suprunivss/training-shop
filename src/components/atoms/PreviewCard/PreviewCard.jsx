import { PreviewLink, Wrapper } from './styles';
import Typography from '../Typography/Typography';
import { typographyTypes } from '../Typography/constants';

const PreviewCard = ({ children, img }) => {
  return (
    <Wrapper img={img}>
      <PreviewLink>
        <Typography type={typographyTypes.title_16} Tag='h2'>
          { children }
        </Typography>
      </PreviewLink>
    </Wrapper>
  );
};

export default PreviewCard;