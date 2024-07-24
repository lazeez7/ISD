import React from 'react';
import './Section_Advantages.css';

const Section_Advantages = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="jiddiy">
            <div className="banner_score"  data-aos="fade-right"  data-aos-duration="1000">
              <h3>jiddiy.SCORE</h3>
              <h1>Преимущества</h1>
              <div className="infas">
                <div className="infas_1">
                  <img src="menu-board.png" alt="" />
                  <p>Централизованное управление кредитными заявками</p>
                </div>
                <div className="bb"></div>
                <div className="infas_1">
                  <img src="card-coin.png" alt="" />
                  <p>Быстрое создание скоринговой модели</p>
                </div>
                <div className="infas_1">
                  <img src="grid-eraser.png" alt="" />
                  <p>Конструкторская модель для управления рисками</p>
                </div>
                <div className="infas_1">
                  <img src="note-favorite.png" alt="" />
                  <p>Управление логикой кредитной истории</p>
                </div>
                <div className="infas_1">
                  <img src="layer.png" alt="" />
                  <p>Управление логикой доходов;</p>
                </div>
                <div className="infas_1">
                  <img src="danger.png" alt="" />
                  <p>Мониторинг и управление ошибками</p>
                </div>
                <div className="infas_1">
                  <img src="document-filter.png" alt="" />
                  <p>Мониторинг системы</p>
                </div>
              </div>
            </div>
            <div className="banner_srm"  data-aos="fade-left"  data-aos-duration="1000">
              <img src="Home.png" alt="" className="banner_ssrm" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section_Advantages;
