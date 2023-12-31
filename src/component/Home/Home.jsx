import React from "react";
import "./Home.css";

import { HiMiniArrowDownRight } from "react-icons/hi2";
import img1 from "/src/assets/man.jpg";
import img2 from "/src/assets/mans.jpg";
import img3 from "/src/assets/woman.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <div className="main-section">
          <div className="section1">
            <div>
              <p>Revolutionize Your </p>
            </div>
            <div>
              <h1>
                Creative Projects with <br /> the Ultimate AI-Powered
              </h1>
            </div>

            <div className="section2">
              <span className="heading">Pattern </span>
              <Link to="generating"><button>START GENERATING</button></Link>
              <p>
                The Next generation <br />{" "}
                <b style={{ color: "black" }}>Production</b> for Designers
              </p>
            </div>
          </div>
        </div>

        <div className="section3">
          <div className="grid1">
            <span className="grid-number">01</span>

            <div className="avatar">
              <div className="avatar-pic">
                <img src={img1} alt="" />
                <img
                  src={img2}
                  alt=""
                  style={{ position: "relative", right: "9px" }}
                />
                <img
                  src={img3}
                  alt=""
                  style={{ position: "relative", right: "20px" }}
                />
              </div>

              <h3>Learn from best mentors</h3>
              <button className="grid1-btn"><Link to="/course" style={{color:"white"}}>START LEARNING</Link>
                
                <HiMiniArrowDownRight className="gird1-icon" />
              </button>
            </div>
          </div>
          <div className="grid2">
            <span className="grid-number">02</span>

            <div className="row2">
              <div className="grid2-row">
                Free Edit <Link to="/free-edit"><HiMiniArrowDownRight className="grid2-icon" /></Link>
              </div>
              <div className="grid2-row">
                Interactive <Link to="/interactive"><HiMiniArrowDownRight className="grid2-icon" /></Link>
              </div>
              <div className="grid2-row">
                Easy interface <Link to="/easyinterface"><HiMiniArrowDownRight className="grid2-icon" /></Link>
              </div>
              <div className="grid2-row">
                Compare to other <Link to="/compare"><HiMiniArrowDownRight className="grid2-icon" /></Link>
              </div>
            </div>
          </div>

          <div className="grid3">
            <span className="grid-number">03</span>

            <div className="row3">
              <h5 className="grid3-heading">+20K</h5>
              <p className="grid3-para">
                Glass Pattern generated this
                <br /> week in the first release{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
