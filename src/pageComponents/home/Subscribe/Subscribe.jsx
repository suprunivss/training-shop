import {
  ImageContainerLeft, ImageContainerRight,
  SubscribeButton,
  SubscribeContainer,
  SubscribeContent,
  SubscribeEmail,
  SubscribeTitle,
  SubscribeWrapper,
} from './styles';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <ImageContainerLeft/>
      <SubscribeContainer>
        <SubscribeContent>
          <Typography type={ typographyTypes.subtitle } Tag="span" color="rgba(18, 18, 18, 0.6)">
            SPECIAL OFFER
          </Typography>
          <SubscribeTitle>
            <Typography type={ typographyTypes.title_26 } Tag="span">
              SUBSCRIBE
            </Typography>
            <Typography type={ typographyTypes.title_26 } Tag="span">
              AND
              <Typography type={ typographyTypes.title_26 } Tag="span" color="#E91E63"> GET 10% OFF</Typography>
            </Typography>
            <SubscribeEmail/>
            <SubscribeButton>
              SUBSCRIBE
            </SubscribeButton>
          </SubscribeTitle>
        </SubscribeContent>
      </SubscribeContainer>
      <ImageContainerRight/>
    </SubscribeWrapper>
  );
};

export default Subscribe;