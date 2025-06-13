import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import ScrollIndicator from '../components/ScrollIndicator';
import './MainLayout.css';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/Content/About'));
const Portfolio = lazy(() => import('../pages/Content/Portfolio'));
const TodoList = lazy(() => import('../pages/Content/TodoList'));
const Contact = lazy(() => import('../pages/Content/Contact'));

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className="main-layout">
      <Suspense fallback={<Loading />}>
        {isHomePage ? (
          // Scrollable sections for home page
          <>
            <section id="intro" className="section">
              <Home />
            </section>
            <section id="about" className="section">
              <About />
            </section>
            <section id="portfolio" className="section">
              <Portfolio />
            </section>
            <section id="contact" className="section">
              <Contact />
            </section>
            <ScrollIndicator />
          </>
        ) : (
          // Regular page content for other routes
          <section className="section">
            {location.pathname === '/about' && <About />}
            {location.pathname === '/portfolio' && <Portfolio />}
            {location.pathname === '/contact' && <Contact />}
          </section>
        )}
      </Suspense>
    </div>
  );
};

export default MainLayout;
