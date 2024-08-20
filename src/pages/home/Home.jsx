import { useEffect } from "react";
import "../home/Home.scss";
import Aos from "aos";
import "aos/dist/aos.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Carusel from "../carusel/Carusel";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="All">
      <div className="Home">
        <div className="color"></div>
        <div className="container">
          <div className="home">
            <div className="home-one" data-aos="zoom-out-up">
              <h1>Найдите идеальное место для жизни</h1>
              <p>Откройте двери в новое будущее с нами</p>
              <button>Подробнее</button>
            </div>
            <div className="home-two" data-aos="zoom-out-down">
              <button>
                <FaChevronLeft className="left" />
              </button>
              <button>
                <FaChevronRight className="left" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Box">
        <div className="container">
          <div className="box">
            <div
              className="boxs-one"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h2>Почему выбирают нас</h2>
            </div>
            <div
              className="boxs-two "
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div className="boxs-first">
                <div
                  className="boxss"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h4>Опыт и профессионализм</h4>
                  <p>
                    Наши специалисты имеют многолетний опыт в различных сферах
                    недвижимости, что гарантирует высокое качество услуг
                  </p>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/8e73/83fd/ac248cfb40013c8e2a80851c8246a1a3?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ArAPQ5Zhg9qWORtv4qoOlAzNSC9x720FS2DgZmW82htDl5BGeYzWNvZsETT3JeQeCOejBhXZEMcIUQGQJXNjoUffPbBgQk4obnDgD-d~Cieghmac2hUGbvOJHnr27TRGE1oGZVorZPhH409oAG-3R8lr1v00Lf9gcMJiSi3RAua9dr7xGjoK1T3A~Y2er-SYLnDLIQGHU2HRnFVvTrarx4PKsJGpx6UL1Z671T~w~z5-hem9jGiViVUev~93oC4lxx8VtGUE3B8JkVSVOc8fIpEvqj99inQQXaDEFp~cxPmwKt2DsUj9saTsbP~MY6-6NlGoR6-A53VtoLw5wwlM7w__"
                  alt=""
                />
                <div
                  className="boxss"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h4>Прозрачность и доверие</h4>
                  <p>
                    Обеспечение полной прозрачности всех операций и
                    предоставление отчетов. Работа основана на принципах
                    честности и доверия, что подтверждается отзывами
                  </p>
                </div>
              </div>
              <div className="boxs-first">
                <img
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  src="https://s3-alpha-sig.figma.com/img/c603/d4db/98367530688c2734abcc1cd0b4dc1826?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HKN5EdBptXQ9DMGZz~47oDfHrJ96fG9yHzgCqYsK7gnmpFAo6J-WV91G8ZLgEKAKUuK8RJ~kjxrOt~yYMC5PEppfHCE-tHBWfyAJTFMlLWp9l1iqX6LP3GTSNF5rAsUMKSNDduzUyQKdikMSSB8B9QZkHa28pmYza~ctGF45LlQx0TnzzVB2TThrQh-tHn5MOgcfML2VZPaKhS-1ure3tmE0-8vlGR5tj2L9IICIcq-qKMej-46Wfr5tPsQo9SQVrsh63SjB9XX4HTqNAasrQM-DGHSuea4YTWjIwPhFlJOl9X6rq9FQjW663bWBGv8m4eyxHzkpuE6SDDtBCXi5tQ__"
                  alt=""
                />
                <div
                  className="boxss"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h4>Высокий уровень обслуживания</h4>
                  <p>Мы всегда на связи, чтобы помочь вам в любое время</p>
                </div>
                <img
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  src="https://s3-alpha-sig.figma.com/img/5033/7c80/75d3ec8583acda847a0ed4cc7d198c1d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MGXYLz9mIDW7oZt8Y3meALuM1bqxwmCdbGgLYGKIx6PjaZbyb9oxy4Ao9JPulns862ZHDq2T~ZPOwZhkym10fLrt7jTUWXr8wwsD-f3FTWqWWOy5FnXddKXEtSunHHNDPnzRXoGHAFdXOOKCDUfPLtq5ExJ6~IrUbw4vUeDmxKMgqk3AfbsW74BHjeJ4AX~TPqpzz4WKn6D4hsPvP6h7I8-FPaKFZbmh9zCqjdWx9VX3HglQuiMFkVuu1ZWjXTojhuHGQCiTNu-7f-O~L-lw4rFw8ltuPkyFcx4h4tYsmYgoFo5F-8wqTUiDTIcMSMaafHszoN6XhZOnL7Cwbs74ng_"
                  alt=""
                />
              </div>
              <div className="boxs-first">
                <div
                  className="boxss"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h4>Индивидуальный подход</h4>
                  <p>
                    Мы разрабатываем персонализированные решения, учитывая
                    уникальные потребности каждого клиента
                  </p>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/cf4c/5b23/2185f8aafdb532bca7f9ae5caf62ea89?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mqEOj6aGv-eD7DO2IwAoudCDffkXAwyIHfU~aGOIUSW3j2gqCSQRlQ7B9sIvy0UVYqyEJt352Ws6Osu9vSHNFkXvTTcavFzUkCD~uyscwHWM2XvM~mpjFVWZaAEMdOEZkzgoMcW1fSi7jNf7iMsY26bTfNyiTpoq7Lvs4~6CF6XpoaoieDF5j8rvLwfMDhUk0ZIaxw8PuvSOsRqop46p7mItUTVhfH-fBhUe~BU7NwgUygtFyFreAuidNcNgjetPVbp6cscCyV-NDPotB5noUsZl086CNk724bRO8uG2LLilQNxGY6zB4Px6feVP1Ge53bJ~FPPShnKuMx5ZCEFD2A__"
                  alt=""
                />
                <div
                  className="boxss"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h4>Комплексное обслуживание</h4>
                  <p>
                    Полный спектр услуг, включающий аренду, куплю-продажу,
                    управление и инвестиции в недвижимость.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Carusel />
        </div>
      </div>
    </div>
  );
};
export default Home;
