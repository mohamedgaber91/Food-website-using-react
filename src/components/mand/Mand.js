import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import mandImge from "../../imges/mande.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCheck } from '@fortawesome/free-solid-svg-icons'
import "./Mand.css"
function Mande (){
    
    return(
        <div className="our-mande">
            <div className="container">
                <div className="mande-content row ">
                    <div className="col-sm-12 col-md-6 text-left">
                        <h3>We make everything by hand with the best possible ingredients.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <p><FontAwesomeIcon icon={faCheck} color="#a82c48" className="icon"/>  Etiam sed dolor ac diam volutpat.</p>
                        <p><FontAwesomeIcon icon={faCheck} color="#a82c48" className="icon"/> Erat volutpat aliquet imperdiet.</p>
                        <p><FontAwesomeIcon icon={faCheck} color="#a82c48" className="icon"/> purus a odio finibus bibendum.</p>
                        <button className="mande-btn">learn more</button>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img src={mandImge} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mande