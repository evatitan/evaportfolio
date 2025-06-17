import { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import './MainLayout.css';

const Home = lazy(() => import('../pages/Home'));

const Portfolio = lazy(() => import('../pages/Content/Portfolio/Portfolio'));
const TechStack = lazy(() => import('../pages/Content/TechStack'));
const Travel = lazy(() => import('../pages/Content/Travel'));
const Contact = lazy(() => import('../pages/Content/Contact'));

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className="main-layout">
      <Suspense fallback={<Loading />}>
        {isHomePage ? (
          <div className="continuous-scroll">
            <section id="intro" className="section">
              <Home />
            </section>
            <section id="tech-stack" className="section">
              <TechStack />
            </section>
            <section id="portfolio" className="section">
              <Portfolio />
            </section>
            <section id="travel" className="section">
              <Travel />
            </section>
            <section id="contact" className="section">
              <Contact />
            </section>
          </div>
        ) : (
          <section className="section">
            {location.pathname === '/tech-stack' && <TechStack />}
            {location.pathname === '/portfolio' && <Portfolio />}
            {location.pathname === '/travel' && <Travel />}
            {location.pathname === '/contact' && <Contact />}
          </section>
        )}
      </Suspense>
    </div>
  );
};

export default MainLayout;
