import React from 'react';
import './window.css';
import credit from '../Window/Chips.png';

const Window = () => {
  return (
    <>
      <div className="window__wrap" data-aos="fade-down">
        <div className="container">
          <div className="window__block">
            <div className="window__content">
              <div className="credit__png" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">
                <img src={credit} alt="" className="credit" />
              </div>
              <p className="text" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">
                Повышение оперативности рассмотрения кредитной заявки и
                оформления сделок покредитным продуктам. Инкрементальное
                формирование досье клиента, отражающего всю историю
                взаимодействия с клиентом, одновременно с рассмотрением
                кредитной заявки. Автоматизация и перевод в электронную форму
                бизнес-процесса принятия решения покредитной заявке
                коллегиальным органом. Снижение рисков от некорректного
                оформления документов по кредитным продуктам. Повышение скорости
                выведения новых продуктов на рынок при помощи гибкого
                инструментария описания продуктов и настройки маршрутов
                рассмотрения заявок.
              </p>
            </div>
            <div className="window__main">
              <div className="window__head">
                <h1 className="window__h1" data-aos="fade-down"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">Главного окна</h1>
                <div className="window__img">
                  <img src="/Shape.png" alt="" data-aos="fade-up"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000"/>
                </div>
              </div>
              <div className="window__monitor" >
                <div className="flex">
                  <img src="Shape (1).png" alt="" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000"/>
                  <p data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">
                    Мониторинг всех <br /> поступающих заявок
                  </p>
                </div>
                <div className="flex">
                  <img src="Shape (2).png" alt="" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000"/>
                  <p data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">Клиентский профиль заявителя</p>
                </div>
                <div className="flex">
                  <img src="Shape (3).png" alt="" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"/>
                  <p data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">
                    Гибкое управление <br /> кредитными продуктами
                  </p>
                </div>
                <div className="flex">
                  <img src="Shape (3).png" alt="" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"/>
                  <p data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000">
                    Автоматизация всего <br /> процесса выдачи кредита
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Window;
