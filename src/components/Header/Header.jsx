import { Link, useLocation } from "react-router-dom";
import TopSection from "../TopSection/TopSection";
import "./Header.css";
import { smoothScrollTo } from "../../utils/smoothScrollTo";
import { useEffect } from "react";
import logo from '../../assets/images/Logo.png';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";


useEffect(() => {
  if (location.pathname !== "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [location.pathname]);

  

  return (
    <header className={`header ${isHomePage ? "header--static" : ""}`}>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/" className="menu__link">
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/about" className="menu__link">
              About
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link menu__logo-link">
              <img src={logo} alt="" className="logo" />
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/blog" className="menu__link">
              Blog
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/gallery" className="menu__link">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>

      {isHomePage && (
        <>
          <TopSection />
          <div
            className="arrows-container"
          onClick={() => smoothScrollTo(window.innerHeight * 3, 2000)}
          >
            <div className="arrows"></div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
