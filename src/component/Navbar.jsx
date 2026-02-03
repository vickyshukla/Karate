
import Logo from '../images/logo-bg.png';


const Navbar = () => {
    return (
        <>
            <nav className="navbar container navbar-expand-lg navbar-dark fixed-top navbar-glass">
                <div className="container-fluid">
                    <a href='#home'  className="navbar-brand logo">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                               <a href='#home' className="nav-link">Home</a> 
                            </li>
                            <li className="nav-item">
                              <a href='#about' className="nav-link">About Us</a>
                            </li>
                            <li className="nav-item">
                              <a href='#program' className="nav-link">Program</a>
                            </li>
                            <li className="nav-item">
                              <a href='#instructors' className="nav-link">Instructors</a>
                            </li>
                            <li className="nav-item">
                              <a href='#schedule' className="nav-link">Schedule</a>
                            </li>
                            <li className="nav-item">
                              <a href='#testimonials' className="nav-link">Testimonials</a>
                            </li>
                            <li className="nav-item">
                              <a href='#faq' className="nav-link">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a href='#contact' className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
