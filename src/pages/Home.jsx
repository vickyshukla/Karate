import React from 'react';
import Hero from '../images/karate-men.png'

export const Home = () => {
  return (
    <div className="container mt-5" id='home'>
      <div className="row">
        <div className="col-md-7 custom-hero">
          <h1 className="hero_text">Train Your<br/><span>Martial Arts</span></h1>
          <p>Quisque leo augue, lobortis ac tellus nec, posuere  Praesent massa odio,
               pellentesque in consectetur quis, volutpat sit amet erat..
          </p>
          <button type="button" class="btn btn-warning">Learn More</button>
        </div>
        <div className="col-md-5 hero-bg-col">
          {/* <!-- Right side image --> */}
          <img src={Hero} alt="Hero" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

