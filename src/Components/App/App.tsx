import React from 'react';
import './App.css';
import { Header } from '../Header';
import { CategoryList } from '../CategoryList';
import { Routes, Route } from 'react-router-dom';
import { ProductList } from '../ProductList';
import { Product } from '../Product';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/categories/:id_category" element={<ProductList />} />
        <Route
          path="/categories/:id_category/product/:id_product"
          element={<Product />}
        />
      </Routes>
    </>
  );
};

export default App;
