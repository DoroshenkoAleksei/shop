import React from "react";
import About from "./About";
import Contact from "./Contact";
import Process from "./Process";
import Footer from "./Footer";
import Front_2 from './img/Front_2.jpg'
import Front_3 from './img/Front_3.jpg'



export default function Main() {
  return (
    <>
      <div>
        <>
          <meta charSet="utf-8" />
          <title>
            {"{"}% block title %{"}"}name{"{"}% endblock %{"}"}
          </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="{% static 'core/css/base.css' %}" />
          <link rel="stylesheet" href="{% static 'basket/css/basket.css' %}" />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n        /* Custom CSS styles */\n        .navbar-brand {\n            margin-right: 2rem; /* Add some spacing to the right of the brand */\n        }\n        .navbar-form {\n            margin-right: 4cm; /* Add a 4cm margin to the right of the search input */\n        }\n        .form-control {\n            width: 300px; /* Уменьшаем ширину строки поиска на 25% */\n        }\n        .btn-custom {\n            margin-left: 1rem; /* Add spacing between buttons */\n        }\n        .btn-request-consultation {\n            margin-left: 1rem; /* Оставляем одинаковое расстояние между кнопками */\n        }\n        .btn-custom {\n            white-space: nowrap;\n        }\n        .btn-custom {\n            white-space: nowrap;\n            margin-top: 10px; /* Здесь можно указать необходимое вам значение в пикселях */\n        }\n        \n        /* Добавляем стили для футера */\n        .footer {\n            padding: 2rem 0;\n            background-color: #f8f9fa;\n        }\n\n        .footer h5 {\n            font-size: 1rem;\n        }\n\n        .footer ul {\n            list-style: none;\n            padding: 0;\n        }\n\n        .footer a {\n            color: #6c757d;\n        }\n\n        .footer hr {\n            border-color: #dcdcdc;\n        }\n        \n\n    "
            }}
          />
        </>

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
                  <li className="nav-item">
                    <a className="nav-link" href="{% url 'store:about' %}">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="{% url 'store:delivery' %}">
                      Delivery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="{% url 'store:reviews' %}">
                      Reviews
                    </a>
                  </li>
                </ul>
                <button type="button" className="btn btn-custom"></button>
                <div className="d-flex align-items-center">
                  <div
                    className="badge bg-danger rounded-circle me-1"
                    id="basket-qty"
                  >

                  </div>
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
            <div className="container ">
              <link rel="stylesheet" href="{% static 'core/css/home.css' %}" />
            </div>
            <br />
            <div className="position-relative">
              <img
                src={Front_2}
                alt="Front2"
                style={{ width: 408, height: 571, flexShrink: 0, marginLeft: "20mm" }}
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
                  borderRadius: 20
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
                  right: "5cm"
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
      </div>
      <About />
      <Process />
      <Contact />
      <Footer />
    </>

  );
}  