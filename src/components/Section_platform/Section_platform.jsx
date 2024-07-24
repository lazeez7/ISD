import React from "react";
import "./Section_platform.css";

const Section_platform = () => {
  return (
    <>
      <div className="wrapper" >
        <div className="container">
          <div className="block_1">
            <h1>Платформы</h1>
            <div className="cards_2" data-aos="fade-up" data-aos-duration="1000">
              <div className="card_2">
                <img src="img-3.png" alt="" data-aos="zoom-in-down" data-aos-duration="1000"/>
                <div className="infos"  data-aos-duration="1000">
                  <h2  data-aos="zoom-in-up" data-aos-duration="1000">Fintech</h2>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">Кредитный конвейер</p>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">Скоринг</p>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">E-wallets</p>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">E-commerce</p>
                </div>
              </div>
              <div className="card_3">
                <img src="img-2.png" alt="" data-aos="zoom-in-down" data-aos-duration="1000"/>
                <div className="infos"  data-aos-duration="1000">
                  <h2 data-aos="zoom-in-up" data-aos-duration="1000">API</h2>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">Управление счетами и картами</p>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">Платежи и переводы</p>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">Сервисные функции</p>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">Инфосервисы</p>
                </div>
              </div>
              <div className="card_2">
                <img src="img-1.png" alt="" data-aos="zoom-in-down" data-aos-duration="1000"/>
                <div className="infos">
                  <h2  data-aos="zoom-in-up" data-aos-duration="1000">BaaS</h2>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">(Banking as a Service) Middleware</p>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">Банковские услуги как сервис</p>
                </div>
              </div>
              <div className="card_3">
                <img src="img-4.png" alt="" data-aos="zoom-in-down" data-aos-duration="1000"/>
                <div className="infos"  data-aos-duration="1000">
                  <h2  data-aos="zoom-in-up" data-aos-duration="1000">BaaP</h2>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">(Banking as a Platform) Middleware</p>
                  <p data-aos="zoom-in-right" data-aos-duration="1000">Банковский бекенд (Инфраструктура)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_platform;
