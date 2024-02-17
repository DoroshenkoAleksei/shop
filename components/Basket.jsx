import React from "react";
import { useNavigate } from "react-router-dom";

export default function Basket() {
  const navigate = useNavigate();

  return (
    <>
      {/* {"{"}% extends "../store/base.html" %{"}"}
  {"{"}% load static %{"}"}
  {"{"}% block title %{"}"}Basket Summary{"{"}% endblock %{"}"}
  {"{"}% block content %{"}"} */}
      <main className="pt-5">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="col-12">
            <h1 className="h2">Your Basket</h1>
            <p
              style={{
                width: 264,
                height: 20,
                flexShrink: 0,
                color: "#000" /* text 16 medium */,
                fontFamily: "Poppins",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              Order now pay when delivered!
            </p>
            <p></p>
          </div>
          <div className="col-12"></div>
          <hr />
        </div>
        <div
          className="container"
          style={{
            maxWidth: 1000,
            marginLeft: 170,
            display: "flex",
            width: 575,
            height: 449,
            padding: "24px 32px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 18,
          }}
        >
          <div className="row g-3">
            <div className="col-12 bg-light p-3 d-flex justify-content-between">
              <div className="d-flex d-flex-inline" style={{ marginLeft: 620 }}>
                <div className="pe-3" />
                {/* <div className="pt-2">
              Total to pay:{" "}
              <span className="fw-bold h5" id="total">
                $ {"{"}
                {"{"}basket.get_total_price{"}"}
                {"}"}
              </span>
            </div> */}
              </div>
            </div>
            <div className="col-md-5 col-lg-4 order-md-last p-0 order-3">
              <div className="d-grid gap-2 "></div>
            </div>
            <div className="col-md-7 col-lg-8 p-0">
              {/* {"{"}% for item in basket %{"}"}
          {"{"}% with product=item.product %{"}"} */}
              <div
                className="card mb-3 border-0 product-item"
                // data-index="{{product.id}}"
                // data-price="{{product.price}}"
              >
                <div className="row g-0">
                  <div className="col-md-2 d-none d-md-block">
                    {/* <img
                  className="img-fluid mx-auto d-block"
                  alt="Responsive image"
                  src="{{ product.image.url }}"
                /> */}
                  </div>
                  <div className="col-md-10 ps-md-3">
                    <div className="card-body p-1">
                      <a
                        className="text-decoration-none text-reset"
                        // href="{{item.product.get_absolute_url}}"
                      >
                        <p className="card-text pb-3">
                          {/* {"{"}
                      {"{"}product.title{"}"}
                      {"}"} */}
                        </p>
                      </a>
                      <label htmlFor="select">Qty</label>
                      <select
                        className="select-qty"
                        // data-index="{{product.id}}"
                        style={{ width: 50, height: 31 }}
                      >
                        {/* <option value="{{item.qty}}" selected="">
                      {"{"}
                      {"{"}item.qty{"}"}
                      {"}"}
                    </option> */}
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                      <button
                        type="button"
                        className="delete-button"
                        // data-index="{{product.id}}"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* {"{"}% endwith %{"}"}
          {"{"}% endfor %{"}"} */}
            </div>
          </div>
          <button
            type="button"
            id="checkout-button"
            style={{
              marginLeft: 500,
              marginTop: "-220px",
              display: "flex",
              width: 404,
              height: 56,
              padding: "24px 42px",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
              flexShrink: 0,
              borderRadius: 30,
              backgroundColor: "#FF406E",
            }}
          >
            <a
              //   href="{% url 'store:order' %}?total="
              id="open-order"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <li className="nav-item-link" onClick={() => navigate("/order")}>
                Checkout
              </li>
            </a>
          </button>
          <h3
            style={{
              width: 335,
              height: 27,
              color: "#000" /* text big 20 semiBold */,
              fontFamily: "Poppins",
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              marginLeft: 570,
            }}
          >
            Need assistance with the order?
          </h3>
          <h4
            style={{
              width: 198,
              color: "#000",
              fontFamily: "Poppins",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginLeft: 630,
            }}
          >
            Give us a call right now
          </h4>
          <h1
            style={{
              width: 212,
              height: 45,
              fontFamily: "Poppins",
              fontSize: 32,
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              color: "#FF406E",
              marginLeft: 630,
            }}
          >
            +7926115798
          </h1>
        </div>
      </main>
      {/* {"{"}% endblock %{"}"} */}
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
