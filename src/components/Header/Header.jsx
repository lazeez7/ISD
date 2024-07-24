import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header__wrap " data-aos="fade-down" data-aos-duration="1000">
        <div className="container">
          <div className="header__block">
            <div className="header__content">
              <div className="header__logo" data-aos="fade-left" data-aos-duration="1000">
                <a href="#"><img src="13.png" alt=""/></a>
              </div>
              <div className="header__text" data-aos="fade-right" data-aos-duration="1000">
                <h1>
                  Автоматизируйте свой <span>бизнес вместе с нами!</span>
                </h1>
                <p className="invite">
                  INNOVATIVE STUDIO OF DEVELOPERS картирования вашего бизнеса:
                  стратегический план
                </p>
              </div>
            </div >
            <div data-aos="fade-left" data-aos-duration="1000"><img className="qwertyuio" src="Image.png" alt=""/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
