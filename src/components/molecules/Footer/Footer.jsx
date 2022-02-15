import { Wrapper } from './styles';
import Join from './Join/Join';
import Links from './Links/Links';
import Copyright from './Copyright/Copyright';

const Footer = () => {
  return (
    <Wrapper>
      <Join/>
      <Links/>
      <Copyright/>
    </Wrapper>
  );
};

export default Footer;