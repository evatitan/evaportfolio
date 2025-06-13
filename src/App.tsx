import React, { Component, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from './components/Loading';

// Lazy load components
const Navbar = lazy(() => import('./pages/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/Content/About'));
// const Travel = lazy(() => import('./pages/Content/Travel'));
const Portfolio = lazy(() => import('./pages/Content/Portfolio'));
const TodoList = lazy(() => import('./pages/Content/TodoList'));
// const Spanish = lazy(() => import('./pages/Content/Spanish'));
const Contact = lazy(() => import('./pages/Content/Contact'));
const Footer = lazy(() => import('./pages/Footer'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));

// Define routes separately to avoid circular dependencies
const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/todoList" element={<TodoList />} />
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
