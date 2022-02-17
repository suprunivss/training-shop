import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 104px 0 96px 0;
  gap: 40px;

  @media(max-width: 992px) {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  gap: 30px;
`