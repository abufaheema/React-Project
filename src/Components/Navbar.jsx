import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm p-2 ">
      <div className="container">
        <Link clLinkssName="navbar-brand mt-3" to="/">
          <Logo id="logo" className="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-3 px-4">
            <li className="nav-item ">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/myShortlist"
              >
                <BsFillSuitHeartFill
                  className="mb-1"
                  style={{ color: "gray" }}
                />{" "}
                My shortlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manageMyBooking">
                Manage my booking
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="listYourProperty">
                List your property
              </Link>
            </li>
          </ul>

          <div class="dropdown mt-3 ">
            <button
              class="btn1 btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
            >
              Sign In
            </button>
            <ul class="dropdown-menu ">
              <li>
                <Link class="dropdown-item" to="/traveller">
                  Traveller
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/">
                  <ol class="breadcrumb  ">
                    <li class="breadcrumb-item ">
                      <Link to="owners" className="text-decoration-none">
                        Owners
                      </Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Managers
                    </li>
                  </ol>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
