import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/components/layouts/Layout';
import Components from '@/pages/temp/Components';

const Home = lazy(() => import('@/pages/home/Home'));
const Login = lazy(() => import('@/pages/login/Login'));
const Signup = lazy(() => import('@/pages/signup/Signup'));
const Faq = lazy(() => import('@/pages/faq/Faq'));
const NotFound = lazy(() => import('@/pages/common/NotFound'));

const routes = [
  // TODO components 제거
  { key: 'components', path: '/components', element: <Components /> },
  { key: 'home', path: '/', element: <Home /> },
  { key: 'login', path: '/login', element: <Login /> },
  { key: 'signup', path: '/signup', element: <Signup /> },
  { key: 'faq', path: '/faq', element: <Faq /> },
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
