import styled from 'styled-components';
import menuSliderImage from '../../../assets/img/sliderMain.jpg';

export const PreviewSection = styled.section`
  margin-top: 32px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
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

  @media (max-width: 1200px) {
    width: 100%;
  }
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
`;

export const PreviewContainerLarge = styled(PreviewContainer)`
  height: 260px;
  flex-basis: 100%;
  flex-grow: 1;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  flex-grow: 1;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
`;
