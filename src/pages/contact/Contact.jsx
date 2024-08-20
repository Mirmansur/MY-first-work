import { useEffect } from "react";
import "../contact/Contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Contact">
      <div className="container">
        <div className="contact">
          <div className="contact-one" data-aos="fade-right">
            <div className="cont-first">
              <h2>Остались вопросы? Свяжитесь с нами</h2>
            </div>
            <div className="cont-second">
              <div className="input">
                <input type="text" placeholder="ФИО *" />
                <input type="number" placeholder="Телефон *" />
                <input type="email" placeholder="Email *" />
                <input type="text" placeholder="Ваш вопрос *" />
              </div>
            </div>
            <div className="cont-third">
              <button>Отправить</button>
            </div>
          </div>
          <div className="contact-two">
            <img
              data-aos="fade-left"
              src="https://s3-alpha-sig.figma.com/img/0c43/c999/37684fc4d15fd511e98e679c9a779772?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZRyVeDpqkSzLDC7P0V8Jy87EgBn~rJ0Unp1Y0xKlEgY8QxMsKyxkVfEu8Hk56-40qA8dQcJ15lPzRRVCCtGlIa9f-2Arg6NWhziqXJPzu686EKj9d~isCi8EFLitX39PrwHHPBy8JvHH0rUrKZFA~HDsegTkXT-87H44GUJlVfKM8~M0ptY7N-e--MCM1~8-tIbBdNpM1JjhcnaIcMJNwWLPmhwGiVyMOC3uRtZrO5j6uy5d3P2rXY6jOGVfL8h2~QGUysqkJ8VDp5G1etZC76xbiyzWBwBXgO3ahII~Z~KrGPdAMVlHWy1891eU37RxMT7eN16MBjILv1ZRUP8bQA__"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
