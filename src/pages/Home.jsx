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
    <section className="hero-section" id="home" ref={heroRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 custom-hero">
            <span className="hero-badge">New student offer • Free trial week</span>
            <h1 className="hero-title">
              Train Your <span>Martial Arts</span> Journey With Confidence
            </h1>
            <p className="hero-copy">
              Join a modern dojo designed for strength, discipline, and
              community. Flexible schedules, expert coaching, and programs for
              all ages.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-warning">
                Start Free Trial
              </button>
              <a href="#schedule" className="btn btn-outline-light ms-3">
                View Schedule
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <h4>120+</h4>
                <p>Active Students</p>
              </div>
              <div className="stat-card">
                <h4>15 Years</h4>
                <p>Coaching Experience</p>
              </div>
              <div className="stat-card">
                <h4>5 Programs</h4>
                <p>For Kids & Adults</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image-wrapper">
              <img src={Hero} alt="Martial artist kicking" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
