import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import './App.css'
import ProductDetails from './components/ProductDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/article/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
