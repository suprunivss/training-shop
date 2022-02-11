import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  width: 255px;
  height: 212px;
  position: absolute;
  top: 318px;
  background-color: #ffffff;
  transition: 500ms;
  transform: translateY(0px);
`;

export const CartWrapper = styled.article`
  display: flex;
  position: relative;
  height: 378px;
  width: 255px;
  overflow: hidden;

  :hover ${ CartItemWrapper } {
    transform: translateY(-155px);
  }
`;

export const CartImage = styled.div`
  background-size: cover;
  width: 255px;
  height: 318px;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 15.68px;
  color: rgba(18, 18, 18, 0.6);
  padding: 16px 0 11px 0;
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartColor = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 16px 0 12px 0;
`;

export const CartColorButton = styled.button`
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export const CartSize = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding-bottom: 20px;
`;

export const CartSizeButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F8F8;
  border: none;
  cursor: pointer;
`;

export const CartButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

export const ButtonContainer = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  cursor: pointer;
`
