import { useEffect } from "react";
import "../blog/Blog.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";
const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Blog">
      <div className="container">
        <div className="blog">
          <div className="blog-one" data-aos="fade-up" data-aos-duration="3000">
            <h2>Блог</h2>
          </div>
          <div className="blog-two">
            <div
              className="blogs-first"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="firsts-one">
                <p>31.07.2024</p>
                <p>899</p>
              </div>
              <div className="firsts-two">
                <p>Тенденции и прогнозы рынка недвижимости на 2024 год</p>
              </div>
              <div className="firsts-three">
                <p>Подробнее</p>
                <FaArrowRightLong className="icons" />
              </div>
            </div>
            <div
              className="blogs-secend"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="firsts-one">
                <p>31.07.2024</p>
                <p>899</p>
              </div>
              <div className="firsts-two">
                <p>Лучшие районы для инвестиций в недвижимость</p>
              </div>
              <div className="firsts-three">
                <p>Подробнее</p>
                <FaArrowRightLong className="icons" />
              </div>
            </div>
            <div
              className="blogs-three"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="firsts-one">
                <p>31.07.2024</p>
                <p>899</p>
              </div>
              <div className="firsts-two">
                <p>Топ-10 новых жилых комплексов</p>
              </div>
              <div className="firsts-three">
                <p>Подробнее</p>
                <FaArrowRightLong className="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
