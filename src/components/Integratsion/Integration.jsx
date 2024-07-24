import React from "react";
import "./integration.css";

const Integration = () => {
  return (
    <>
      <div className="inter__wrap">
        <div className="container">
          <div className="inter__block">
            <div className="inter__back">
              <div className="inter__content" data-aos="fade-down"
     data-aos-anchor-placement="center-bottom" data-aos-data-aos-duration="1000">
                <img src="Chips (1).png" alt="" />
                <h1>Интеграционный шлюз</h1>
                <p>Для всей нашей системы специально разработан единый интеграционный шлюз с использованием новейших технологий в области разработки.</p>
              </div>

              <div className="inter__cards" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                <div className="inter__card">
                <h1>ABS</h1>
                <p>Интеграция с <br /> АБС банка</p>
                </div>
                <div className="inter__card">
                <h1>eGOV</h1>
                <p>Интеграция с <br /> государственными сервисами РУз</p>
                </div>
                <div className="inter__card">
                <h1>KATM</h1>
                <p>Интеграция с Кредитным  бюро для получение кредитной информации</p>
                </div>
                <div className="inter__card">
                <h1>HUMO</h1>
                <p>Интеграция с НМЦП "HUMO" для получения и проведения транзакционных операций</p>
                </div>
                <div className="inter__card">
                <h1>UzCARD</h1>
                <p>Интеграция с ЕОПЦ "UZCARD" для получения и проведения транзакционных операций</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integration;
