import 'normalize.css';

import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Product from './pages/Product/Product';

function App() {
  return (
    <div data-test-id="app">
      <Routes>
        <Route path="/" element={ <Home/> } exact/>
        <Route path="*" element={ <Home/> } exact/>
        <Route path="/Men" element={ <Men/> } exact/>
        <Route path="/Women" element={ <Women/> } exact/>
        <Route path="/Men/:id" element={ <Product link="Men"/> } exact/>
        <Route path="/Women/:id" element={ <Product link="Women"/> } exact/>
      </Routes>

    </div>
  );
}

export default App;
