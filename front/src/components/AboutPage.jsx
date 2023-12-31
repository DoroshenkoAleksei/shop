import React from "react";
import About from "./img/About.jpg";
import Rectangle_32 from './img/Rectangle_32.png'
import Rectangle_36 from './img/Rectangle_36.png'


export default function AboutPage() {
  return (
    <>
    <div id="content">
      <h1
        style={{
          color: "#FF406E" /* headlines 48 semiBold */,
          fontFamily: "Poppins",
          fontSize: 48,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          marginLeft: 100,
          marginTop: 50,
        }}
      >
        About us
      </h1>
      <h3
        style={{
          /* text 16 medium */
          fontFamily: "Poppins",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          color: "#000",
          marginLeft: 800,
          marginTop: "-50px",
        }}
      >
        Интернет магазин COLLEKTIONBEAUTY предлагает оригинальную <br />
        косметику от Soskin (Париж, Франция), SkinClinic (Испания), <br />
        ECLADO(Корея), RENOPHASE (Франция),
        <br />
        M.A.D.(США). Приобретая у нас косметику брендов Soskin, SkinClinic.
        ECLADO,
        <br /> RENOPHASE, M.A.D. , Вы можете быть уверенны в эффективности и{" "}
        <br />
        безопасности ее применения. Наш интернет магазин гарантирует
        <br />
        отсутствие подделок и просроченных продуктов, т.к. напрямую работает с{" "}
        <br />
        Дистрибьюторами Soskin, SkinClinic, ECLADO, RENOPHASE, M.A.D. <br />в
        России.
      </h3>
      <br />
      <div>
        <img
          src={About}
          alt="about"
          style={{ marginLeft: 100, width: 1212, height: 700 }}
        />
      </div>
      <br />
      <h1
        style={{
          fontFamily: "Poppins",
          fontSize: 48,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          color: "#FF406E",
          marginLeft: 100,
        }}
      >
        Soskin
      </h1>
      <h3
        style={{
          /* text 16 medium */
          fontFamily: "Poppins",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          color: "#000",
          marginLeft: 800,
          marginTop: "-50px",
        }}
      >
        Космецевтика Soskin - это безопасная экологически-чистая натуральная
        <br />
        косметика, созданная с применением самых современных достижений <br />
        в косметологии и медицине. Натуральная французская космецевтика. <br />
        Премиальный бренд, предлагающий полный спектр портфолио для <br />
        дерматологов, врачей-эстетистов и косметологов.
      </h3>
      <br />
      <h1
        style={{
          fontFamily: "Poppins",
          fontSize: 48,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          color: "#FF406E",
          marginLeft: 100,
        }}
      >
        SkinClinic
      </h1>
      <h3
        style={{
          /* text 16 medium */
          fontFamily: "Poppins",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          color: "#000",
          marginLeft: 800,
          marginTop: "-50px",
        }}
      >
        Косметика SkinClinic - это испанская косметика которая улучшает ваш
        <br />
        имидж и качество вашей жизни, предлагая медицинские и косметические{" "}
        <br />
        решения для красоты, старения и многих других проблем с кожей.
        <br />
        Объединяя исследования и повседневную медицинскую практику, SkinClinic
        <br />
        производит дермокосметику, которая доказала свою эффективность и <br />
        простоту использования как часть повседневного ухода за кожей.
        <br />
        ECLADO – известный корейский бренд профессиональной косметики с <br />
        20-летней историей успеха, в основе которого лежит философия <br />
        «здоровой красоты».
      </h3>
      <br />
      <h1
        style={{
          fontFamily: "Poppins",
          fontSize: 48,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          color: "#FF406E",
          marginLeft: 100,
        }}
      >
        Eclado
      </h1>
      <img
        src={Rectangle_32}
        alt="some"
        style={{ marginLeft: 100, marginTop: 50 }}
      />
      <h3
        style={{
          /* text 16 medium */
          fontFamily: "Poppins",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          color: "#000",
          marginLeft: 800,
          marginTop: "-50px",
        }}
      >
        Профессиональная косметика ECLADO – это продукция премиального <br />
        качества, которая представляет собой уникальный синтез высоких <br />
        технологий, традиционных ценных компонентов и современного подхода к{" "}
        <br />
        производству. Вся продукция ECLADO безопасна, гипоаллергенна, действует
        очень <br />
        деликатно, отличается доказанной эффективностью и обеспечивает <br />
        длительный устойчивый результат. Высокая концентрация растительных{" "}
        <br />
        экстрактов, пептидов, аминокислот, гиалуроновой кислоты в составе <br />
        косметики позволяют почувствовать wow-эффект уже после первого
        <br />
        применения! В портфеле ECLADO - 8 основных косметических линий.
        <br />
        Широкий ассортимент продуктов - более 120 наименований - позволяет{" "}
        <br />
        предложить клиентам эстетические программы, решающие разнообразные{" "}
        <br />
        задачи и подходящие для кожи любого возраста, типа и состояния.
      </h3>
      <br />
      <br />
      <br />
      <h3
        style={{
          /* text 16 medium */
          fontFamily: "Poppins",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          color: "#000",
          marginLeft: 100,
          marginTop: "-10px",
        }}
      >
        RENOPHASE® - международная группа, представленная научно-
        <br />
        исследовательскими лабораториями и производственными базами во <br />
        Франции, Швейцарии и Канаде, где разрабатываются новые и <br />
        совершенствуются испытанные технологии. На базе современных <br />
        представлений о физиологии процессов старения, механизмов действия{" "}
        <br />
        anti-age- компонентов, накопленного многолетнего практического опыта{" "}
        <br />
        создаются высокоэффективные методики омоложения с разработкой <br />
        инновационных комплексов, защищенных международными патентами.
        <br />
        Инновационные формулы отвечают самым взыскательным требованиям
        пациентов.
      </h3>
      <h1
        style={{
          fontFamily: "Poppins",
          fontSize: 48,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          color: "#FF406E",
          marginLeft: 1000,
          marginTop: "-180px",
        }}
      >
        Renophase
      </h1>
      <br />
      <br />
      <br />
      <h3
        style={{
          /* text 16 medium */
          fontFamily: "Poppins",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          color: "#000",
          marginLeft: 100,
          marginTop: 200,
        }}
      >
        Американский бренд M.A.D. Skincare создал уникальную косметику, которая
        <br />
        предназначается для решения дерматологических проблем и домашнего <br />
        ухода за кожей лица. Ее отличают совершенные формулы и высокое <br />
        качество, так как все продукты тщательно контролируются на каждом этапе
        <br />
        производства. M.A.D. Skincare представляет серии косметики, действие
        которых <br />
        направлено на омоложение, осветление, восстановление, выравнивание и{" "}
        <br />
        очищение кожного покрова. В своем составе ухаживающие средства
        <br />
        содержат целый комплекс полезных веществ. Американская косметика дает
        <br />
        быстрый результат и гарантирует накопительный эффект.
      </h3>
      <h1
        style={{
          fontFamily: "Poppins",
          fontSize: 48,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          color: "#FF406E",
          marginLeft: 700,
          marginTop: "-170px",
        }}
      >
        M.A.D
      </h1>
      <img
        src={Rectangle_36}
        alt="some"
        style={{ marginLeft: 900 }}
      />
      <br />
      <br />
      <br />
      <h1
        style={{
          fontFamily: "Poppins",
          fontSize: 48,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          color: "#FF406E",
          marginLeft: 100,
          marginTop: 80,
        }}
      >
        Genosys
      </h1>
      <h3
        style={{
          /* text 16 medium */
          fontFamily: "Poppins",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          color: "#000",
          marginLeft: 800,
          marginTop: "-50px",
        }}
      >
        Geneus 
        <br />
        Genosys cosmetics are professional skin care products from the Korean brand, <br/>
        based on a unique combination of modern peptides, components of traditional <br/>
        Korean medicine and plant stem cells. The action of the drugs is aimed at improving the condition <br/>
        of problematic and aging skin, its restoration and deep regeneration. The brand's catalog also <br/>
        includes multifunctional products against hair loss and other problems.<br/>
      </h3>
      <br />
      <br />
      <br />
      <br />
      <h3
        style={{
          /* text 16 medium */
          fontFamily: "Poppins",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          color: "#000",
          marginLeft: 100,
          marginTop: "-30px",
        }}
      >
        FORISE products are a wide and varied line, which includes: dietary supplements, <br/>
        herbal products, functional nutrition, cosmetics for body and face care, children's vitamins,<br/>
         balms and more. The company develops all new recipes based on consumer needs. <br/>
         Many buyers in Russia and other countries of the world have already appreciated the benefits <br/>
         of FORISE product lines created on the basis of ingredients of natural origin.<br/>
      </h3>
      <h1
        style={{
          fontFamily: "Poppins",
          fontSize: 48,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          color: "#FF406E",
          marginLeft: 1000,
          marginTop: "-90px",
        }}
      >
        Forise
      </h1>

      
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
