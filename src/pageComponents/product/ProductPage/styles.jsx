import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  margin-top: 32px;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 16px;
  width: 554px;
  height: 560px;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const SliderButtonLeft = styled.div`
  position: absolute;
  top: 45%;
  left: 15px;
  z-index: 1;
`;

export const SliderButtonRight = styled.div`
  position: absolute;
  top: 45%;
  right: 15px;
  z-index: 1;
`;

export const SliderWrapperPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SliderWrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-left: 30px;
  gap: 32px;

  @media (max-width: 1200px) {
    align-items: center;
  }
`;

export const SliderPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonPreview = styled.div`
  display: flex;
  gap: 14px;
`;

