import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetail';
import { useState } from 'react';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <div className='bg-mantis-200'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/article/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
