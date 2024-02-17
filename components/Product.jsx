import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ price, src, title, description }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <main className="pt-5">
          <div className="row g-3">
            <div className="col-md-5 col-lg-5 order-md-first bg-light">
              <img
                className="img-fluid mx-auto d-block"
                width="100%"
                alt="Responsive image"
                src={src}
              />
            </div>
            <div className="col-md-7 col-lg-7 ps-md-3 ps-lg-5">
              <h1 className="mb-0 h4">
              {title}
              </h1>
              <br />
              <p>
                {/* {"{"}
            {"{"} product.description {"}"}
            {"}"} */}
              </p>
              <br />
              <div className="border">
                <div className="col border-bottom">
                  <div className="row p-3">
                    <div className="col-6" />
                    <div className="col-6 text-end">
                      <span className="h4 fw-bold">
                        {/* ${"{"}
                    {"{"} product.price {"}"}
                    {"}"} */}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row p-3">
                    <div className="col-6">
                      <label htmlFor="select">Qty</label>
                      <select id="select">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                      <div className="col-6 text-end">
                        <button
                          type="button"
                          id="add-button"
                          value="{{product.id}}"
                          className="btn btn-secondary btn-sm"
                        >
                          Add to basket
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* {"{"}% endblock %{"}"} */}
    </>
  );
}
