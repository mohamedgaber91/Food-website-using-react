import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Watch.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faVideo } from '@fortawesome/free-solid-svg-icons'
function Watch (){
    return(
        <div className="our-watch">
            <div className="container">
                <div className="watch-content">
                        <h2>When a man's stomach is full it makes no <br/>
                         difference whether he is rich or poor.</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>
                         finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                         <button className="watch-btn">watch your story <FontAwesomeIcon icon={faVideo} color="#a82c48"/></button>
                </div>
            </div>
        </div>
    )
}
export default Watch