import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));

const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: 18,
    color: '#888',
  }}>
    Loading…
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <h2 style={{ textAlign: 'center', marginTop: 80 }}>
                404 — Page Not Found
              </h2>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
