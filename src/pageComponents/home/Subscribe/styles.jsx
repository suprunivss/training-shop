import styled from 'styled-components';
import subscribe1 from '../../../assets/img/subscribe1.png'
import subscribe2 from '../../../assets/img/subscribe2.png'

export const SubscribeWrapper = styled.section`
  height: 580px;
  width: 100vw;
  background: linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  height: max-content;
  width: max-content;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 584px;
    background-image: url(${subscribe1});
    background-repeat: no-repeat;
    top: -23px;
    left: -260px;
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 524px;
    background-image: url(${subscribe2});
    background-repeat: no-repeat;
    top: -20px;
    left: 520px;
  }
`;

export const SubscribeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 96px 96px 96px;
`;

export const SubscribeTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

export const SubscribeEmail = styled.input.attrs({
  type: 'email',
  placeholder: 'Enter your email',
})`
  margin: 32px 0 24px 0;
  color: rgba(18, 18, 18, 0.4);
  width: 340px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F8F8;
  text-align: center;
  border: none;

  :hover {
    color: rgba(18, 18, 18, 0.6);
  }
`;

export const SubscribeButton = styled.button`
  width: 340px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;