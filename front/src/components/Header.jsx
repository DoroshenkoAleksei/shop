import React from "react";
import Front_2 from "./img/Front_2.jpg";
import Front_3 from "./img/Front_3.jpg";
import { useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            COLLEKTIONBEAUTY
          </a>
          <form className="d-flex navbar-form" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="d-flex align-items-center ms-auto">
            <ul className="navbar-nav mb-2 mb-md-0 ms-auto">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item nav-link" onClick={() => navigate("/about")}>
                About
              </li>
              <li className="nav-item">Delivery</li>
              <li className="nav-item">Reviews</li>
            </ul>
            <button type="button" className="btn btn-custom"></button>
            <div className="d-flex align-items-center">
              <div
                className="badge bg-danger rounded-circle me-1"
                id="basket-qty"
              ></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              Basket
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-container">
        <ul className="navbar-nav mb-2 mb-md-0 width: 41px; height: 18px;">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="/">
              New
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-md-0 ms-auto">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="/">
              Brands
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-md-0 ms-auto">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="/">
              Skin type
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-md-0 ms-auto">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="/">
              For lips
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-md-0 ms-auto">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="/">
              For face
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-md-0 ms-auto">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="/">
              For hair
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-md-0 ms-auto">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="/">
              Both and body
            </a>
          </li>
        </ul>
      </div>
      <>
        <br />
        <div className="position-relative">
          <img
            src={Front_2}
            alt="Front2"
            style={{
              width: 408,
              height: 571,
              flexShrink: 0,
              marginLeft: "20mm",
            }}
          />
          <img
            src={Front_3}
            alt="Front"
            style={{ width: 380, height: 571, marginLeft: "1mm" }}
          />
          <button
            className="Subscribe"
            style={{
              position: "absolute",
              top: "9cm",
              right: "2.5cm",
              backgroundColor: "#FF406E",
              color: "white",
              border: "none",
              padding: "10px 75px",
              fontSize: 30,
              borderRadius: 20,
            }}
          >
            Subscribe
          </button>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              position: "absolute",
              top: "0cm",
              right: "5cm",
            }}
          >
            <button
              className="btn btn-custom2"
              style={{ width: "100%", textAlign: "left" }}
            >
              Soskin
            </button>
            <button
              className="btn btn-custom2"
              style={{ width: "100%", textAlign: "left" }}
            >
              SkinClinic
            </button>
            <button
              className="btn btn-custom2"
              style={{ width: "100%", textAlign: "left" }}
            >
              Eclado
            </button>
            <button
              className="btn btn-custom2"
              style={{ width: "100%", textAlign: "left" }}
            >
              Renophase
            </button>
            <button
              className="btn btn-custom2"
              style={{ width: "100%", textAlign: "left" }}
            >
              M.A.D.
            </button>
            <button
              className="btn btn-custom2"
              style={{ width: "100%", textAlign: "left" }}
            >
              Genosys
            </button>
            <button
              className="btn btn-custom2"
              style={{ width: "100%", textAlign: "left" }}
            >
              Forise
            </button>
          </div> */}
        </div>
      </>
    </header>
  );
}
