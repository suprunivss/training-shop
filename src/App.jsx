import 'normalize.css';

import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Product from './pages/Product/Product';

function App() {
  return (
    <div data-test-id='app'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Home/>} />
        <Route path="/Men" element={<Men/>} />
        <Route path="/Women" element={<Women/>} />
        <Route path="/Men/:id" element={<Product link='Men'/>} />
        <Route path="/Women/:id" element={<Product link='Women'/>} />
      </Routes>

    </div>
  );
}

export default App;
