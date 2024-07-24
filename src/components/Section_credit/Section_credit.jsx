import React from "react";
import './Section_credit.css'

const Section_credit = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="jiddiy_credit">
            <div className="banner_credit" data-aos="fade-right"  data-aos-duration="1000">
              <h3>jiddiy.CREDIT</h3>
              <h1>Основные преимущества</h1>
              <div className="infaas">
                <div className="infaas_1">
                  <img src="maximize.png" alt="" />
                  <p>
                    Ускорение процесса: Автоматизированные системы и алгоритмы
                    позволяют существенно сократить время, необходимое для
                    обработки и анализа заявок на кредит.
                  </p>
                </div>
                <div className="infaas_1">
                  <img src="tick-square.png" alt="" />
                  <p>
                    Улучшение точности решений: Конвейер использует комплексные
                    алгоритмы для анализа финансовой и кредитной истории
                    заявителей, что повышает точность принимаемых решений.
                  </p>
                </div>
                <div className="infaas_1">
                  <img src="emoji-happy.png" alt="" />
                  <p>
                    Повышение клиентской удовлетворенности: Быстрое рассмотрение
                    заявок и выдача кредитов способствуют улучшению опыта
                    клиентов и укреплению их доверия к учреждению.
                  </p>
                </div>
              </div>
            </div>
            <div className="banner_crm" data-aos="fade-left" data-aos-duration="1000">
                <img src="Create.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section_credit;
