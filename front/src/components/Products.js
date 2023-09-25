import React from "react";

export default function Products() {
    return (
<>
  <hr />
  <h1 className="header">Our products</h1>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 ">
    {"{"}% for product in products %{"}"}
    <div className="col">
      <div className="card border-0">
        <img
          className="img-fluid"
          alt="Responsive image"
          src="{{ product.image.url }}"
        />
        <div className="card-body px-0">
          <p className="card-text">
            <a
              className="text-dark text-decoration-none"
              href="{{ product.get_absolute_url }}"
            >
              {"{"}
              {"{"} product.title|slice:":50" {"}"}
              {"}"}...
            </a>
          </p>
          <div className="fw-bold">
            ${"{"}
            {"{"}product.price{"}"}
            {"}"}
          </div>
        </div>
      </div>
    </div>
    {"{"}% endfor %{"}"}
  </div>
  <br />
  <br />
  {/* How to place an order BLOCK
   */}
  <div style={{ position: "absolute", top: 0, right: 0, marginRight: "2cm" }}>
    <div style={{ display: "flex", flexDirection: "column", marginTop: 1950 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
      >
        {/* Код иконки первого виджета */}
      </svg>
      {/* Заголовок и описание */}
      <div
        style={{
          marginLeft: "1em",
          color: "var(--Black, #000)" /* text 16 medium */,
          fontFamily: "Poppins",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal"
        }}
      >
        <h3 style={{ marginTop: 100 }}>How to place an order</h3>
      </div>
    </div>
    {/* Другие блоки с виджетами и заголовками аналогично первому */}
    {/* Пример второго блока */}
    <div>
      {/* Иконка виджета (замените на вашу иконку) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
      >
        {/* Код иконки второго виджета */}
      </svg>
      {/* Заголовок и описание */}
      <div style={{ marginLeft: "1em" }}>
        <h1
          style={{
            color: "var(--Pink-main, #FF406E)" /* headlines 48 semiBold */,
            fontFamily: "Poppins",
            fontSize: 48,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal"
          }}
        >
          Order process
        </h1>
      </div>
    </div>
  </div>
</>

    );
}