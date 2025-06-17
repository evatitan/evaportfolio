import { Component, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loading from './components/Loading';
import TechStack from './pages/Content/TechStack';

const Navbar = lazy(() => import('./pages/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const Travel = lazy(() => import('./pages/Content/Travel'));
const Portfolio = lazy(() => import('./pages/Content/Portfolio/Portfolio'));
const Contact = lazy(() => import('./pages/Content/Contact'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/tech-stack" element={<TechStack />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <AppRoutes />
        </Suspense>
      </div>
    );
  }
}
