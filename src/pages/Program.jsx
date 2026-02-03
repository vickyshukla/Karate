// PricingComponent.js




export const Program = () => {
  return (
    <section className="program-section" id="program">
      <div className="container">
        <h2 className="main__heading">Courses & Plans</h2>
        <p className="section-subtitle">
          Choose a plan that fits your goals. Every membership includes progress
          tracking, belt evaluations, and access to our dojo community.
        </p>
        <div className="main__cards cards">
          <div className="cards__inner">
            {/* Card 1 */}
            <div className="cards__card card">
              <h2 className="card__heading">Basic Self Defence</h2>
              <p className="card__price">₹99</p>
              <ul role="list" className="card__bullets flow">
                <li>2 classes per week + fundamentals track</li>
                <li>Starter uniform + belt evaluation</li>
                <li>Monthly progress review</li>
              </ul>
              <button className="btn btn-outline-light">Get Started</button>
            </div>

            {/* Card 2 */}
            <div className="cards__card card">
              <h2 className="card__heading">Advanced Self Defence</h2>
              <p className="card__price">₹199</p>
              <ul role="list" className="card__bullets flow">
                <li>Unlimited classes + advanced technique labs</li>
                <li>Weekly sparring and mobility sessions</li>
                <li>Priority coach feedback</li>
              </ul>
              <button className="btn btn-outline-light">Upgrade Now</button>
            </div>

            {/* Card 3 */}
            <div className="cards__card card">
              <h2 className="card__heading">Professional Self Defence</h2>
              <p className="card__price">₹299</p>
              <ul role="list" className="card__bullets flow">
                <li>Elite coaching with private sessions</li>
                <li>Performance testing + competition prep</li>
                <li>Nutrition and recovery planning</li>
                <li>Priority scheduling + guest seminars</li>
              </ul>
              <button className="btn btn-outline-light">Talk to a Coach</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
