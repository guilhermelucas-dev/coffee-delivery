import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefatultLayout';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout/intex';
import { Success } from './pages/Success';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  );
}     