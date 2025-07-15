import { HashRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import { AnimatedFog } from './components/FogLoader/AnimatedFog';
import { AppRoutes } from './routes';

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle("home", location.pathname === "/");
  }, [location.pathname]);

  return (
    <>
      <AnimatedFog />
      <Header />
      <AppRoutes />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
