import { useEffect } from "react";
import "../carusel/Carusel.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { CiHeart } from "react-icons/ci";

const Carusel = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Images">
      <div className="container">
        <div className="cruis">
          <div className="cruis-one">
            <h2 data-aos="fade-up" data-aos-duration="3000">
              Новостройки
            </h2>
          </div>
          <div className="images">
            <div className="images-one" data-aos="zoom-in-right">
              <div className="ones">
                <CiHeart />
              </div>
              <div className="twos">
                {" "}
                <h3>Safa Two</h3>
                <p>от $399 000</p>
              </div>
            </div>
            <div
              className="images-two"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="ones">
                <CiHeart />
              </div>
              <div className="twos">
                {" "}
                <h3>Peninsula Two</h3>
                <p>от $245 000</p>
              </div>
            </div>
            <div className="images-three" data-aos="zoom-in-left">
              <div className="ones">
                <CiHeart />
              </div>
              <div className="twos">
                {" "}
                <h3>Safa One</h3>
                <p>от $1 900 000</p>
              </div>
            </div>
          </div>
          <div className="cruis-two">
            <button>Смотреть все</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carusel;
