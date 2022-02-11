import 'normalize.css';

import Header from './components/molecules/Header/Header';
import Divider from './components/atoms/Divider/Divider';
import Home from './pages/Home/Home';
import Cart from './components/molecules/Cart/Cart';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
      </main>
      <Divider/>
      <Cart/>
      <Cart/>
    </>
  );
}

export default App;
