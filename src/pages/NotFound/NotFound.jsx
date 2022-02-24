import { Logo, Wrapper } from './slyles';

const NotFound = () => {
  return (
    <Wrapper>
      <Logo to="/" data-test-id="header-logo-link">
        CleverShop
      </Logo>
      <h1>СТРАНИЦА ВРЕМЕННО НЕ ДОСТУПНА!</h1>
    </Wrapper>
  );
};

export default NotFound;