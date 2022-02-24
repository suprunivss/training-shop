import 'normalize.css';

import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Product from './pages/Product/Product';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div data-test-id='app'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/men/:id" element={<Product link='men'/>} />
        <Route path="/women/:id" element={<Product link='women'/>} />
      </Routes>
    </div>
  );
}

export default App;
