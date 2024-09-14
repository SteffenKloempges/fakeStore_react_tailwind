import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { useFetchData } from './data/useFetchData';
import ProductList from './components/ProductList';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
