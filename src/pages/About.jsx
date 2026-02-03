import { useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { gsap } from "../animations/gsap";
import karateFour from '../images/karate-4.jpg';
import karateFive from '../images/karate-5.jpg';
import karateSix from '../images/karate-6.jpg';


export const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (!gsap) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from(".about-section .reveal", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.2,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="container">
      <div className="row">
        {/* Carousel on the left */}
        <div className="col-md-6">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={karateFour}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Traditional Foundations</h3>
                <p>
                  Train with time-tested techniques and modern coaching.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={karateFive}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="">Community Focused</h3>
                <p>Small groups keep training safe, supportive, and fun.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={karateSix}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Performance Ready</h3>
                <p>Strength, mobility, and sparring that prepare you for real life.</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Add more carousel items as needed */}
          </Carousel>

          
        </div>

        {/* Content on the right */}
        <div className="col-md-6 content-normal">
          <h5 className="reveal">About Us</h5>
          <h2 className="mt-3 reveal">
            We Are a Modern
            <br /> Martial Arts School
          </h2>
          <p className="mt-3 reveal">
            Our dojo blends traditional values with contemporary training.
            Whether you want fitness, self-defense, or competitive skills, we
            build a plan that fits your lifestyle.
          </p>
          <div className="about-list reveal">
            <p className="bg_dark"><span className="bg_darkspan">01</span>Personalized progress plans</p>
            <p className="bg_dark"><span className="bg_darkspan">02</span>Certified black belt instructors</p>
            <p className="bg_dark"><span className="bg_darkspan">03</span>Family-friendly and inclusive environment</p>
          </div>
          {/* Add more content as needed */}
        </div>
      </div>
      </div>
    </section>
  );
};
