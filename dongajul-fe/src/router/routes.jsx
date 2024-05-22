import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layouts/Layout';

const Home = lazy(() => import('../pages/common/Home'));
const Login = lazy(() => import('../pages/login/Login'));
const NotFound = lazy(() => import('../pages/common/NotFound'));

const routes = [
  { key: 'home', path: '/', element: <Home /> },
  { key: 'login', path: '/login', element: <Login /> },
  { key: 'notfound', path: '*', element: <NotFound /> },
];

const RoutesComponents = () => (
  <Routes>
    {routes.map(({ key, path, element }) => (
      <Route
        key={key}
        path={path}
        element={<Layout page={element} main={key === 'home'} />}
      />
    ))}
  </Routes>
);

export default RoutesComponents;
