import React, { Component } from "react";
import { Link, link } from "react-scroll";
import Logo from "../Logo";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="naviagtion header">
            <Logo />
            <div className="navMenu">
              <nav>
                <ul>
                  <li>
                    <Link to="home">Home</Link>
                  </li>
                  <li>
                    <Link to="services">Services</Link>
                  </li>
                  <li>
                    <Link to="about">About</Link>
                  </li>
                  <li>
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
