import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { Product } from './types/Product';
import { getAllDevice } from './utils/api';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    getAllDevice()
      .then(devices => setProducts(devices))
      .catch(error => {
        throw new Error(error);
      })
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route
          path="/phones"
          element={(
            <PhonesPage />
          )}
        />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
