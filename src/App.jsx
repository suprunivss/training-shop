import 'normalize.css';

import Header from './components/molecules/Header/Header';
import Divider from './components/atoms/Divider/Divider';
import Home from './pages/Home/Home';
import Catalog from './pageComponents/home/Catalog/Catalog';
import BD from './BD';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <Divider/>
        <Catalog section={BD.women} title="WOMEN'S"/>
        <Catalog section={BD.men} title="MEN'S"/>
      </main>
    </>
  );
}

export default App;
