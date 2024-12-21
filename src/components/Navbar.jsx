import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";


function Navbar() {

  const [isOpne, setIsOpen] = useState(false);

  const toggleMenu = ()=> {
    setIsOpen(!isOpne)
  }

  return (
    <>
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <h2>DesignStudio</h2>
          </div>
          <ul className={isOpne ? "nav-link active" : "nav-link"}>
            <li>
              <a href="/home" className="active">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/service"> Services</a>
            </li>
            <li>
              <a href="/contact">Contact Me</a>
            </li>
          </ul>

          <div className="icon" onClick={toggleMenu}>
          <FaBars />
          </div>
          
        </nav>
      </div>
    </header>
    <section>
      <div className="container">
        <div className="content">
          <h2>Responsive Navbar</h2>
        </div>
      </div>
    </section>
    </>
  );
}

export default Navbar;
