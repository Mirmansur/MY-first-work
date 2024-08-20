import { useState } from "react";
import lux from "../../assets/images/Building.svg";
import "../header/Header.scss";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="Header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <div className="logo-one">
              <img src={lux} alt="Logo" />
            </div>
            <div className="logo-two">
              <h3 className="belleza">Rmc De Luxe</h3>
              <p>real estate</p>
            </div>
          </div>

          <nav className={`menu ${isToggled ? "active" : ""}`}>
            <div className="word">
              <NavLink to="/" end>
                <p
                  className={`toggle ${isToggled ? "active" : ""}`}
                  onClick={handleToggle}
                >
                  Услуги
                </p>
              </NavLink>
              <NavLink to="/about" end>
                <p>О нас</p>
              </NavLink>
              <NavLink to="/blog" end>
                <p>Блог</p>
              </NavLink>
              <NavLink to="/contact" end>
                <p>Контакты</p>
              </NavLink>
            </div>
            <div className="icons">
              <button>
                <CiSearch className="icon" />
              </button>
              <button>
                <CiHeart className="icon" />
              </button>
              <button>
                <IoIosCall className="icon" />
              </button>
            </div>
          </nav>
          <button className="toggle-button" onClick={handleToggle}>
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
