import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Header.css";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const showMenu = () => {
    if (isShow == true) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };
  return (
    <>
      <header>
        <nav>
          <div className="logo">
           <Link style={{color:"black"}} to="/"><h2>AIPatrn</h2></Link>  
          </div>

          {isShow && (
            <>
              
              <div className="menu">
                <ul>
                  <Link to="/">Home page</Link>
                  <Link to="/generator">Generator</Link>
                  <Link to="/pricing-plan">Pricing-plan</Link>
                  <Link to="/blognews">Blog-News</Link>
                </ul>

                <ul>
                  <Link to="about">About us</Link>
                  <Link to="features">Features</Link>
                  <Link to="/collection">Collection-2023</Link>
                  <Link to="career">Career</Link>
                </ul>
              </div>
            </>
          )}

          <div className="menu-btns">
            <Link className="menu-btn" onClick={showMenu}>
              Menu
              <IoMdArrowDropdown className="svg1" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
