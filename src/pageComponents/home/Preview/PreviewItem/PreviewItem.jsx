import { PreviewImage, PreviewItemWrapper, PreviewText } from './styles';

import Typography from '../../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../../components/atoms/Typography/constants';

const PreviewItem = ({ image, title, text }) => {
  return (
    <PreviewItemWrapper>
      <PreviewImage src={ image } alt="shipping icon"/>
      <PreviewText>
        <Typography type={ typographyTypes.subtitle } Tag="span">
          { title }
        </Typography>
        <Typography type={ typographyTypes.body } Tag="span" color="#9C9C9C">
          { text }
        </Typography>
      </PreviewText>
    </PreviewItemWrapper>
  );
};

export default PreviewItem;