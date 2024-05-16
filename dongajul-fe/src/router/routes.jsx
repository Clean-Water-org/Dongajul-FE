import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/common/Home'));
const NotFound = lazy(() => import('../pages/common/NotFound'));

const RoutesComponents = () => (
  <Routes>
    <Route key='home' path='/' element={<Home />} />
    <Route key='notfound' path='*' element={<NotFound />} />
  </Routes>
);

export default RoutesComponents;
