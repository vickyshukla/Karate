import { useEffect, useRef } from "react";
import { gsap } from "../animations/gsap";
import Hero from "../images/karate-men.png";

export const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!gsap) {
      return;
    }
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 30, duration: 0.8 }, "-=0.3")
        .from(".hero-copy", { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
        .from(".hero-actions", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-stats .stat-card", {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.15,
        })
        .from(".hero-image", { opacity: 0, x: 40, duration: 0.8 }, "-=0.6");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container mt-5" id='home'>
      <div className="row">
        <div className="col-md-7 custom-hero">
          <h1 className="hero_text">Train Your<br/><span>Martial Arts</span></h1>
          <p>
            Build confidence, focus, and real-world skills with structured
            martial arts training for every age and experience level.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-warning">Start Free Trial</button>
            <a href="#schedule" className="btn btn-outline-light ms-3">View Schedule</a>
          </div>
          <div className="hero-highlights">
            <div>
              <h4>120+</h4>
              <p>Active Students</p>
            </div>
            <div>
              <h4>15 Years</h4>
              <p>Coaching Experience</p>
            </div>
            <div>
              <h4>5 Programs</h4>
              <p>For Kids & Adults</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 hero-bg-col">
          {/* <!-- Right side image --> */}
          <img src={Hero} alt="Hero" className="img-fluid" />
        </div>
      </div>
    </section>
  )
}
