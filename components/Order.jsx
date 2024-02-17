import React from "react";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/success-page")

  return (
    <>
      <div className="centered-content">
        {" "}
        {/* Добавляем класс центрирования к контейнеру */}
        <div id="content">
          {/* {"{"}% block content %{"}"} */}
          <div className="container">
            <form id="order-form" method="post">
              {/* {"{"}% csrf_token %{"}"} */}
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control required"
                    required=""
                    title="This field is required"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-control required"
                    required=""
                    title="This field is required"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control required"
                    required=""
                    title="This field is required"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="e-mail">E-mail:</label>
                  <input
                    type="email"
                    id="mail"
                    name="mail"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="comment">Order comment:</label>
                  <textarea
                    id="comment"
                    name="comment"
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <label>Delivery Method:</label>
                <div className="delivery" style={{ backgroundColor: "#000;" }}>
                  <input
                    type="radio"
                    id="cash_on_delivery"
                    name="delivery"
                    defaultValue="cash_on_delivery"
                    defaultChecked=""
                  />
                  <label htmlFor="cash_on_delivery" className="on_delivery">
                    Cash on Delivery(+ minimum 350 Rub)
                  </label>
                </div>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                <li
                  className="nav-item-link"
                  onClick={handleClick}
                >
                  Place Order
                </li>
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="container py-5 footer">
        <hr />
        <div className="row pt-4">
          <div className="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-asterisk"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg>
            <small className="d-block mb-3 text-muted">© 2017-2021</small>
          </div>
          <div className="col-6 col-md fs15">
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md fs15">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md fs15">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Business
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Education
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Government
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Gaming
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="link-secondary text-decoration-none" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
