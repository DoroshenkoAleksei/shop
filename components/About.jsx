import React from "react";
import about_front from "./img/about_front.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "5cm",
          marginLeft: 80,
        }}
      >
        <div style={{ flex: 1 }}>
          <h1
            style={{
              color: "#FF406E",
              fontFamily: "Poppins",
              fontSize: 48,
              fontWeight: 600,
            }}
          >
            About us
          </h1>
          <p style={{ marginLeft: 5, marginBottom: "2cm" }}>
            Интернет магазин COLLEKTIONBEAUTY предлагает оригинальную косметику{" "}
            <br />
            от Soskin (Париж, Франция), SkinClinic (Испания), ECLADO(Корея),
            <br /> RENOPHASE (Франция), M.A.D.(США).
          </p>
        </div>
        <div>
          <img
            src={about_front}
            alt="Front_about"
            style={{ height: 701, width: 500, marginRight: 50 }}
          />
        </div>
      </div>
      {/* Четыре заголовка с описаниями, по два в строку */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
          marginTop: -500,
        }}
      >
        {/* Первая строка из двух блоков заголовка и описания */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          {/* Первый блок заголовка и описания */}
          <div style={{ flex: 1, marginRight: 10 }}>
            <h1
              style={{
                color: "#FF406E",
                fontFamily: "Poppins",
                fontSize: 48,
                fontWeight: 600,
                marginLeft: 75,
              }}
            >
              7 brands
            </h1>
            <p style={{ marginLeft: 75 }}>From different countries</p>
          </div>
          {/* Второй блок заголовка и описания */}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                color: "#FF406E",
                fontFamily: "Poppins",
                fontSize: 48,
                fontWeight: 600,
                marginLeft: "-200px",
              }}
            >
              Pay later
            </h1>
            <p style={{ marginLeft: "-200px" }}>
              Prepayment only, pay the rest when <br />
              delivered!
            </p>
          </div>
        </div>
        {/* Вторая строка из двух блоков заголовка и описания */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          {/* Третий блок заголовка и описания */}
          <div style={{ flex: 1, marginRight: 10 }}>
            <h1
              style={{
                color: "#FF406E",
                fontFamily: "Poppins",
                fontSize: 48,
                fontWeight: 600,
                marginLeft: 75,
              }}
            >
              150+
            </h1>
            <p style={{ marginLeft: 75 }}>Products for different skin types</p>
          </div>
          {/* Четвертый блок заголовка и описания */}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                color: "#FF406E",
                fontFamily: "Poppins",
                fontSize: 48,
                fontWeight: 600,
                marginLeft: "-200px",
              }}
            >
              Premium
            </h1>
            <p style={{ marginLeft: "-200px" }}>Quality and best prices</p>
          </div>
        </div>
        {/* Кнопка "About" */}
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            marginTop: 20,
            marginLeft: 75,
          }}
        >
          <a
            className="nav-link"
            // href="{% url 'store:about' %}"
            style={{
              backgroundColor: "white",
              color: "#FF406E",
              border: "2px solid #FF406E",
              padding: "10px 40px",
              borderRadius: 20,
            }}
          >
            <li className="nav-item-link" onClick={() => navigate("/AboutPage")}>
              {" "}
              Read more
            </li>
          </a>
        </div>
      </div>
    </>
  );
}
