import React from "react";
import "./experience.css";
import png from "../Experience/Group 118.png";


const Experience = () => {
  return (
    <>
      <div className="ex__wrap" data-aos="fade-down"  data-aos-duration="1000">
        <div className="container">
          <div className="ex__block">
            <div className="ex__content">
              <h1 data-aos="zoom-in-right"  data-aos-duration="1000">
                Наш опыт{" "}
                <span>
                  {" "}
                  <br /> в разработке
                </span>
              </h1>
              <p className="ex__text" data-aos="zoom-in-right"  data-aos-duration="1000">
                Создайте цикл реагирования, который будет привлекать, вовлекать
                и радовать клиентов, одновременно адаптируя их растущие
                потребности на каждом этапе их пути.
              </p>
              <img src={png} alt="" className="png" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
            </div>
            <div className="ex__service">
              <h1>Что мы умеем</h1>

              <div className="ex__text">
                <div className="line">
                  <p data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Заказная разработка</p>
                </div>
                <li data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Опыт заĸазной разработĸи ПО более 3 лет.</li>
                <li data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Реализованы несколько ĸритичных проеĸтов.</li>
              </div>
              <div className="ex__text">
                <div className="line">
                  <p data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">BPM-платформы</p>
                </div>
                <li data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Опыт работы с BPM-платформами. </li>
              </div>
              <div className="ex__text">
                <div className="line">
                  <p data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Интеграция</p>
                </div>
                <li data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Опыт интеграции с платежными системами Humo, UzCard.</li>
                <li data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Опыт интеграции с гос.услугами mygov, e-gov, soliq.uz. </li>
                <li data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                  Опыт интеграции с кредитными сервисами KATM, АСОКИ и т.д.
                </li>
              </div>
              <div className="ex__text">
                <div className="line">
                  <p data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Open API</p>
                </div>
                <li data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">OpenAPI всегда на стыĸе интеграции и бизнес процессов.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
