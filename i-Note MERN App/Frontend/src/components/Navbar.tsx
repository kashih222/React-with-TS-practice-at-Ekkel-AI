import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
 


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
          iNoteBook
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>

            
              <li className="nav-item mx-2">
                <Link className="nav-link text-white" to="/notes">
                  My Notes
                </Link>
              </li>
            

           
              <>
                <li className="nav-item mx-2">
                  <Link className="btn btn-outline-light px-3" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="btn btn-light text-dark px-3" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
          
              <li className="nav-item mx-2 d-none">
                <button  className="btn btn-outline-danger px-3">
                  Logout
                </button>
              </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
