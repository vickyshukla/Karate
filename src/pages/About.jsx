import { Carousel } from "react-bootstrap";
import karateOne from '../images/karate-1.jpg';
import karateTwo from '../images/karate-2.jpg';
import karateThree from '../images/karate-3.jpg';


export const About = () => {
  return (
    <div className="container mt-5" id="about">
      <div className="row">
        {/* Carousel on the left */}
        <div className="col-md-6">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={karateThree}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={karateTwo}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={karateOne}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Add more carousel items as needed */}
          </Carousel>

          
        </div>

        {/* Content on the right */}
        <div className="col-md-6 content-normal">
          <h5>About Us</h5>
          <h2 className="mt-3">
            We Are Martial
            <br /> Arts School
          </h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur. Molestie cum ut aliquam
            convallis. Lacus sed velit adipiscing diam. Donec elementum mi
            lobortis vulputate fringilla duis vitae tempor at.
          </p>
          <p className="bg_dark"><span className="bg_darkspan">01</span>Muay Thai Kickboxing</p>
          <p className="bg_dark"><span className="bg_darkspan">02</span>Aikido for Self-Defense</p>
          <p className="bg_dark"><span className="bg_darkspan">03</span>Ninjutsu: The Art of the Ninja</p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};
