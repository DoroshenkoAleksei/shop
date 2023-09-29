import React from "react";
import Front_2 from "./img/Front_2.jpg";
import Front_3 from "./img/Front_3.jpg";

export default function Header() {

  return (
    <header>

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
          <div
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
          </div>
        </div>
      </>
    </header>
  );
}
