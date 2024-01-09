// PricingComponent.js




export const Program = () => {
  

    
 
  return (
    <main className="main flow container" id="program">
      <h2 className="main__heading">Cources/Plans</h2>
      <div className="main__cards cards" >
        <div className="cards__inner">
          {/* Card 1 */}
          <div className="cards__card card">
            <h2 className="card__heading">Basic Self Defence</h2>
            <p className="card__price">₹99</p>
            <ul role="list" className="card__bullets flow">
              <li>Access to standard workouts and nutrition plans</li>
              <li>Email support</li>
            </ul>
           
          </div>


          {/* Card 2 */}
          <div className="cards__card card">
            <h2 className="card__heading">Advanced Self Defence</h2>
            <p className="card__price">₹199</p>
            <ul role="list" className="card__bullets flow">
              <li>Access to advanced workouts and nutrition plans</li>
              <li>Priority Email support</li>
              <li>Exclusive access to live Q&A sessions</li>
            </ul>
          
          </div>

          {/* Card 3 */}
          <div className="cards__card card">
            <h2 className="card__heading">Professional Self Defence</h2>
            <p className="card__price">₹299</p>
            <ul role="list" className="card__bullets flow">
              <li>Access to all premium workouts and nutrition plans</li>
              <li>24/7 Priority support</li>
              <li>1-on-1 virtual coaching session every month</li>
              <li>Exclusive content and early access to new features</li>
            </ul>
            
          </div>
        </div>

        
      </div>
    </main>
  );
};


