import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import "./Footer.css"
function Footer (){
    return(
        <div className="our-footer" id="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="list">
                        <ul>
                            <li>foodera</li>
                            <li>Register</li>
                            <li>Afilite</li>
                            <li>FaQ</li>
                        </ul>
                    </div>
                    <div className="social">
                        <ul>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faTwitter} /></li>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                            <li><FontAwesomeIcon icon={faWhatsapp} /></li>
                        </ul>
                    </div>
                    <p>all right is servesed &copy; by mohamed gaber </p>
                </div>
            </div>
        </div>
    )
}
export default Footer