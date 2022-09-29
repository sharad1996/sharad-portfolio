import Empplan from "../assets/clients/client-empplan.jpeg";
import Koo from "../assets/clients/client-koo.jpeg";

function Testimonials({ testimonialData }) {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>{testimonialData.description}</p>
        </div>

        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  {testimonialData.feedBack}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Koo} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className="testimonial-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  {testimonialData.feedBack}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Empplan} className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
