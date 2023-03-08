import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
  import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
function Header (){
    return(
        <div className="our-header">
            <div className="container">
                <div className="header-content">
                    <h3>Good food choices are  good <br/> investments.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Etiam et purus a odio finibus bibendum amet leo.</p>
                    <div className="buttons">
                        <button className="order"> order now <FontAwesomeIcon icon={faCartShopping} /></button>
                        <button className="read">read more  <FontAwesomeIcon icon={faSquareCaretRight}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header