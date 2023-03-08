import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../../imges/logo.png"
import "./Navbar.css"
function Navbar() {
    return (
        <>
        <div className="our-navbar ">
            <div className="container">
                <nav className="navbar navbar-expand-lg  ">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">
                                <img src={logo} alt="" style={{width:"170px"}}/>

                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse m-auto" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item " >
                                        <a className="nav-link active-link " aria-current="page" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link link" href="#footer">
                                            about us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link" href="#foods">
                                            explore foods
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link" href="#testi">
                                            reviews
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link" href="#ques">
                                            faQ
                                        </a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <button className="btn our-btn ">
                                        1102205530
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
            </div>
        </div>
        
            
        </>
    );
}
export default Navbar;
