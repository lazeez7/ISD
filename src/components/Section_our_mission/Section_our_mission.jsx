import React from "react";
import './Section_our_mission.css'

const Section_our_mission = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="section " data-aos="fade-up"data-aos-duration="1000">
            <div className="cards">
              <div className="card_one" data-aos="zoom-in-right"  data-aos-duration="1000">
                <h1 data-aos="zoom-in-right"  data-aos-duration="1000">Кто мы?</h1>
                <p className="p-one" data-aos="zoom-in-right"  data-aos-duration="1000">
                  "Наша команда состоит из опытных <br /> разработчиков,
                  финансовых аналитиков и <br /> дизайнеров, которые работают с{" "}
                  <br /> энтузиазмом и преданностью. Наш <br /> коллектив -
                  ключевой фактор нашего <br /> успеха."
                </p>
                <p className="p-two" data-aos="zoom-in-right" data-aos-duration="1000">
                  Лучше ничего не делать, чем заниматься скучными вещами. <br />{" "}
                  Мы подбираем лучших технологии и вся мощь нашего <br />{" "}
                  технического потенциала для обеспечения опыт, который <br />{" "}
                  выделяет из толпы.
                </p>
              </div>
              <div className="card_two" data-aos="zoom-in-right" data-aos-duration="1000">
                <h1 data-aos="zoom-in-right"  data-aos-duration="1000">Наше обязательство</h1>
                <p data-aos="zoom-in-left"  data-aos-duration="1000">
                  Создание высококачественного цифрового  продукта на
                  основе стратегии, креатива и технологий и {" "}
                  индивидуального подхода.
                </p>
              </div>
            </div>
            <div className="banner_different" data-aos="fade-in-right"  data-aos-duration="1000" >
              <div className="glav_info"  >
                <h1 data-aos="zoom-in-right"  data-aos-duration="1000">Что нас</h1>
                <h2 data-aos="zoom-in-left"  data-aos-duration="1000">отличает</h2>
              </div>
              <div className="infoos">
                <div className="info" data-aos="zoom-in-right"  data-aos-duration="1000">
                  <img src="Icon-1.png" alt="" />
                  <h4>Стратегическое понимание</h4>
                  <p>
                    Мы выходим за рамки поверхностного, углубляясь в рыночные
                    тенденции, чтобы формировать выдающиеся стратегии.
                  </p>
                </div>
                <div className="info" data-aos="zoom-in-left" data-aos-duration="1000">
                  <img src="Icon-2.png" alt="" />
                  <h4 >Творческое совершенство</h4>
                  <p>
                    Наша талантливая команда креативщиков воплощает идеи в
                    жизнь, создавая визуально потрясающие кампании.
                  </p>
                </div>
                <div className="info" data-aos="zoom-in-right"  data-aos-duration="1000">
                  <img src="Icon-3.png" alt="" />
                  <h4>Гибкая адаптируемость</h4>
                  <p>
                    Мы быстро адаптируемся, используя возможности и оптимизируя
                    кампании в режиме реального времени.
                  </p>
                </div>
                <div className="info" data-aos="zoom-in-left" data-aos-duration="1000">
                  <img src="Icon-4.png" alt="" />
                  <h4>Ориентация на клиента</h4>
                  <p>
                    Мы уделяем приоритетное внимание общению и разрабатываем
                    стратегии, которые превзойдут ваши ожидания.
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

export default Section_our_mission;
