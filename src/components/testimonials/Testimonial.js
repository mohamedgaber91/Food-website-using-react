import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import member1 from "../../imges/member-1.jpg";
import member2 from "../../imges/member-2.jpg";
import member3 from "../../imges/member-3.jpg";
import "./Testimonial.css";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

function Testimonial() {
  return (
    <div className="our-testimonial" id="testi">
      <div className="container">
        <div className="testimonial-heading">
          <h2>testimonials</h2>
        </div>
        <div className="testimonal-content">
          <Carousel>
            <Carousel.Item>
              <img className="testi-img" src={member1} alt="Second slide" />
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live."
              </p>
              <h3>Simab Dave - Web Designer</h3>
            </Carousel.Item>
            <Carousel.Item>
            
              <img className="testi-img" src={member3} alt="Second slide" />
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live."
              </p>
              <h3>Simab Dave - Web Designer</h3>
            </Carousel.Item>
            <Carousel.Item>
              <img className="testi-img" src={member1} alt="Second slide" />
              <p>
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live."
              </p>
              <h3>Simab Dave - Web Designer</h3>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
