import React from "react";
import "./Section_direction.css";

const Section_direction = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="block_1">
            <div className="direction_banner"  data-aos="fade-down" data-aos-duration="1000">
              <h1  data-aos="zoom-in-left" data-aos-duration="1000">Наши Направлении</h1>
              <p data-aos="zoom-in-right" data-aos-duration="1000">
                "Наша команда состоит из опытных разработчиков, финансовых
                аналитиков и дизайнеров, которые работают с энтузиазмом и
                преданностью. Наш коллектив - ключевой фактор нашего успеха."
              </p>
            </div>
            <div className="cards_1">
              <div className="card_1" data-aos="flip-right" data-aos-duration="2000">
                <img src="Icon-5.png" alt="" />
                <div className="info">
                  <h3>Разработка веб-приложений</h3>
                  <p>
                    Strategically expand our presence into new international
                    markets and cultivating{" "}
                  </p>
                </div>
              </div>
              <div className="card_1" data-aos="flip-right" data-aos-duration="2000">
                <img src="Icon-6.png" alt="" />
                <div className="info">
                  <h3>DevOps</h3>
                  <p>
                    Development of an innovation hub within the company,
                    becoming a center for creative
                  </p>
                </div>
              </div>
              <div className="card_1"  data-aos="flip-right" data-aos-duration="2000">
                <img src="Icon-7.png" alt="" />
                <div className="info">
                  <h3>Техническая поддержка</h3>
                  <p>
                    Integrate business practices, aligning with environmental
                    responsibility.
                  </p>
                </div>
              </div>
              <div className="card_1" data-aos="flip-right" data-aos-duration="2000">
                <img src="Icon-9.png" alt="" />
                <div className="info">
                  <h3>Разработка мобильных-приложений</h3>
                  <p>Expand service offerings, ensuring a portfolio</p>
                </div>
              </div>
              <div className="card_1"  data-aos="flip-right" data-aos-duration="2000">
                <img src="Icon-8.png" alt="" />
                <div className="info">
                  <h3>Сервисная платформенная интеграция</h3>
                  <p>Invest in the development of our workforce,</p>
                </div>
              </div>
              <div className="card_1"  data-aos="flip-right" data-aos-duration="2000">
                <img src="Icon-5.png" alt="" />
                <div className="info">
                  <h3>Создание экосистем</h3>
                  <p>
                    Become a leader in adopting and leveraging cutting-edge
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section_direction;
