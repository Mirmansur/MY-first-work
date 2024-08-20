import "../footer/Footer.scss";
import lux from "../../assets/images/Building.svg";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer">
          <div className="footer-one">
            <div className="logo" data-aos="fade-down-right">
              <div className="logo-one">
                <img src={lux} alt="Logo" />
              </div>
              <div className="logo-two">
                <h3 className="belleza">Rmc De Luxe</h3>
                <p>real estate</p>
              </div>
            </div>
            <div className="icons" data-aos="fade-down-left">
              <FaInstagram className="insta" />
              <PiTelegramLogoLight className="teleg" />
              <BsWhatsapp className="what" />
              <RiFacebookCircleLine className="face" />
            </div>
          </div>
          <div className="footer-two"></div>
          <div className="footer-three">
            <div className="three-one" data-aos="flip-left">
              <h4>Услуги</h4>
              <p>Купить</p>
              <p>Арендовать</p>
              <p>Продать</p>
              <p>Оценить</p>
            </div>
            <div className="three-one" data-aos="flip-left">
              <h4>Недвижимость</h4>
              <p>Квартиры</p>
              <p>Новостройки</p>
              <p>Дома и участки</p>
              <p>Коммерческая</p>
            </div>
            <div className="three-one" data-aos="flip-left">
              <h4>Компания</h4>
              <p>О нас</p>
              <p>Блог</p>
              <p>Контакты</p>
              <p>Связаться</p>
            </div>
            <div className="three-two" data-aos="flip-left">
              <h4>Другое</h4>
              <p>Ипотечный калькулятор</p>
              <p>Ипотечный калькулятор</p>
            </div>
          </div>
          <div className="footer-four"></div>
          <div className="footer-five">
            <p>2024 © RMC De Luxe real estate LLC. Все права защищены</p>
            <img
              src="https://s3-alpha-sig.figma.com/img/9993/dcb5/c14d8e55ec2085e93a5a6e60adbbebc0?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZa-dpEYvS8lwjbYMAgnuiYuHjP2fKUWAPDDynAIRun89m65q7VFm1ZVIDaowetn18Ck8NmR8u4KG7eRagMXT049g3EoMVj64CciMqzs670wiRPkuGF5pXP7Ve~1pF98MUdoI8NCuyznF9do8MDk6SfIqhfhRhO1oKePrIiyXB3Ux~UvhSrKVb6wAj14ABLXwgHoFjG89MqYSVnqiOeqSAE8KDg3xeleuVU7nj2t3XpblV0Zl0Oen464-fDKmFIJPMG2Aag3gztc4ZRhakCTsNyR2RxbabSiz~AzA3ofsO7PB5WV6FfnEstrTIw4MSFozrCWDaDW8Oe6HtQTPIwzJg__"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
