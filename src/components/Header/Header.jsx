import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { smoothScrollTo } from "../../utils/smoothScrollTo";
import { FaBars, FaTimes } from "react-icons/fa";
import TopSection from "../TopSection/TopSection";
import logo from "../../assets/images/Logo.png";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
}, [isMenuOpen]);


  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <header className={`header ${isHomePage ? "header--static" : ""}`}>
      <nav className="menu">
        <button className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

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

    
    <ul className={`menu__list menu__list--mobile ${isMenuOpen ? "menu__list--open" : ""}`}>
  <li className="menu__item">
    <Link to="/" className="menu__link" onClick={() => setIsMenuOpen(false)}>Home</Link>
  </li>
  <li className="menu__item">
    <Link to="/about" className="menu__link" onClick={() => setIsMenuOpen(false)}>About</Link>
  </li>
  <li className="menu__item">
    <Link to="/blog" className="menu__link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
  </li>
  <li className="menu__item">
    <Link to="/gallery" className="menu__link" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
  </li>
</ul>




      </nav>

      {isHomePage && (
        <>
          <TopSection />
          <div
            className={`arrows-container ${
              !isAtTop ? "arrows-container--disabled" : ""
            }`}
            onClick={() =>
              isAtTop && smoothScrollTo(window.innerHeight * 3, 2000)
            }
          >
            <div className="arrows"></div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
