import styled from 'styled-components';
import menuSliderImage from '../../../assets/img/sliderMain.jpg';

export const Wrapper = styled.div`
  display: flex;
  margin: 32px auto 0;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`

export const Banner = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  color: rgba(18, 18, 18, 0.4);
  text-transform: uppercase;
`;

export const SliderWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 540px;
  height: 490px;
  background-image: url(${ menuSliderImage });
  background-size: cover;
`;

export const SliderStyle = styled.div`
  background: #ffffff;
  height: 100px;
  width: 289px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  flex-basis: calc(50% - 15px);
  flex-grow: 1;
`

export const PreviewContainerLarge = styled(PreviewContainer)`
  height: 260px;
  flex-basis: 100%;
  flex-grow: 1;
`

export const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  flex-grow: 1;
`