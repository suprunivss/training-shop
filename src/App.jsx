import 'normalize.css';

import Header from './components/molecules/Header/Header';
import Divider from './components/atoms/Divider/Divider';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
      </main>
      <Divider/>
    </>
  );
}

export default App;
