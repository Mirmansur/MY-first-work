import "../about/About.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import hous from "../../assets/images/hous.png";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="About">
      <div className="container">
        <div className="about">
          <div className="about-one">
            <div className="ones" data-aos="fade-up" data-aos-duration="3000">
              <h3>О компании</h3>
              <h2>RMC DE LUXE</h2>
            </div>
            <div className="twos" data-aos="fade-left">
              <div className="twos-firs">
                <p>Аренда</p>
                <p>Купля - продажа</p>
                <p>Управление</p>
              </div>
              <div className="twos-secend">
                <p>
                  Широкий выбор объектов: Мы предлагаем разнообразные варианты
                  аренды – от квартир и домов до коммерческих помещений,
                  удовлетворяющие любые потребности
                </p>
                <p>
                  {" "}
                  Надежные арендаторы: Проведение тщательной проверки и отбора
                  арендаторов для обеспечения стабильного дохода и минимизации
                  рисков
                </p>
              </div>
            </div>
          </div>
          <div className="about-two" data-aos="flip-down">
            <img
              src="https://s3-alpha-sig.figma.com/img/97de/cb33/f6f66b3798f0225bf0ecf48250fd4a76?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jJMWltcpqckXFFNjIXbExxn9AQdwXLneyKAWVbixZVUtsz0sOPNBwhOKq-Gq1KoAldEYSxhYHwYcndREHMPzFhe42fbhhg20ok7-J9nLLDHcYp0QtU0I5-QhJC-p3bYMeSbidOcZ2cDe-DJmP3UYVtXkWCUKLbjcmNRVZ4WSDZ8KUmEly4940Ng-9Zj-VZKpNIaUw382L8nr1wV4A9B84lyq85cbPfQYpjzVE2tmR21GiTzf17rDOxBgwkYRa-ADAXXKY3WUZkA~5OSn60qRCsLA57pIt29Ugyn1ywWvpy5QLMpyrmRW1AagmDljZepkFXYXahiIBRVYgy6cx2vUIw__"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="Hous">
        <div className="container">
          <div className="hous">
            <div className="hous-one" data-aos="zoom-in">
              <h2 data-aos="fade-up" data-aos-duration="3000">
                Инвестиции в недвижимость в Дубае
              </h2>

              <p>
                Недвижимость в Дубае предоставляет отличные возможности для
                получения стабильного дохода и увеличения капитала
              </p>
              <p>
                Полный цикл инвестиций: От анализа рынка и подбора объектов до
                управления инвестициями и их реализации .
              </p>
              <p>
                Наши эксперты помогут вам на всех этапах инвестиционного
                процесса, обеспечивая высокое качество обслуживания и
                надежность.
              </p>
              <p>
                Наши услуги включают управление вашей инвестиционной
                недвижимостью, обеспечивая её сохранность и стабильный доход. Мы
                берем на себя все аспекты управления, включая подбор и проверку
                арендаторов, техническое обслуживание, финансовую отчетность и
                юридическую поддержку.
              </p>
              <button>Подробнее</button>
            </div>
            <div className="hous-two">
              <img src={hous} alt="" data-aos="zoom-in" />
            </div>
          </div>
        </div>
      </div>
      <div className="Table">
        <div className="container">
          <div className="tab">
            <div
              className="tab-one"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h2>Что входит в услугу управления недвижимостью</h2>
            </div>
            <div className="tab-two">
              <div className="tabs-first" data-aos="zoom-in-right">
                <div className="first-check">
                  <button>
                    <FaCheck />
                  </button>
                  <p>Проверка арендаторов (кредитная история, рекомендации)</p>
                </div>
                <div className="first-check">
                  <button>
                    <FaCheck />
                  </button>
                  <p>Подготовка и подписание договоров аренды</p>
                </div>
                <div className="first-check">
                  <button>
                    <FaCheck />
                  </button>
                  <p>Сбор арендной платы</p>
                </div>
                <div className="first-check">
                  <button>
                    <FaCheck />
                  </button>
                  <p>Обработка запросов и жалоб арендаторов</p>
                </div>
                <div className="first-check">
                  <button>
                    <FaCheck />
                  </button>
                  <p>Контроль соблюдения условий аренды</p>
                </div>
              </div>
              <div className="tabs-secend" data-aos="zoom-in-left">
                <div className="first-check">
                  <button>
                    <FaCheck />
                  </button>
                  <p>Регулярное техническое обслуживание</p>
                </div>
                <div className="first-check">
                  <button>
                    <FaCheck />
                  </button>
                  <p>Организация и проведение ремонтных работ</p>
                </div>
                <div className="first-check">
                  <button>
                    <FaCheck />
                  </button>
                  <p>Контроль за состоянием недвижимости</p>
                </div>
                <div className="first-check">
                  <button>
                    <FaCheck />
                  </button>
                  <p>Подбор надежных арендаторов</p>
                </div>
              </div>
              <div className="tabs-secend"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="Ipoteka">
        <div className="container">
          <div className="ipoteka">
            <div
              className="ipo-one"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h2>Рассчитайте ипотеку</h2>
            </div>
            <div className="ipo-two">
              <div className="ipo-first" data-aos="zoom-out-right">
                <div className="first-one">
                  <p>Стоимость недвижимости (у.е.)</p>
                  <input type="text" placeholder="Введите стоимость" />
                  <p>Срок в годах</p>
                  <input type="text" placeholder="Введите срок" />

                  <button>Рассчитать</button>
                </div>
                <div className="first-two">
                  <p>Первоначальный взнос (у.е.)</p>
                  <input type="text" placeholder="Введите размер взноса" />
                  <p>Ставка (%)</p>
                  <input type="text" placeholder="Введите размер ставки" />
                </div>
              </div>
              <div className="ipo-secend"></div>
              <div className="ipo-three" data-aos="zoom-out-left">
                <div className="three-one">
                  <div className="number-one">
                    <p>Ежемесячный платеж</p>
                    <h2>4 410 у.е.</h2>
                  </div>
                  <div className="number-two">
                    <p>Сумма кредита</p>
                    <h2>200 000 у.е.</h2>
                  </div>
                </div>
                <div className="three-two">
                  <div className="number-one">
                    <p>Процентная ставка</p>
                    <h2>24%</h2>
                  </div>
                  <div className="number-two">
                    <p>Дата последнего платежа</p>
                    <h2>28 июля 2034 г</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
