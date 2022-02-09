import Bar from './Bar/Bar';
import Navigation from './Navigation/Navigation';
import Divider from '../../atoms/Divider/Divider';

const Header = () => {
  return (
    <header>
      <Bar/>
      <Navigation/>
      <Divider/>
    </header>
  )
    ;
};

export default Header;