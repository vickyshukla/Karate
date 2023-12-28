import prg from '../images/prg.jpg';
import prgOne from '../images/prg-1.png';
export const Program = () => {
  return (
    <div className="container" id="program">
      <div className="row">
      <div className="col-md-4 mb-3">
      <div className="card border-primary " style={{width: "18rem"}}>
        <img src={prg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card`&apos;` content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div>
      <div className="col-md-4 mb-3">
      <div className="card" style={{width: "18rem"}}>
        <img src={prgOne} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card`&apos;` content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div>
       
      <div className="col-md-4 mb-3">
      <div className="card" style={{width: "18rem"}}>
        <img src={prg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card`&apos;` content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};
