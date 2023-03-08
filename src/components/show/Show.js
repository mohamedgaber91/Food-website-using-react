import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import showimge from "../../imges/show-imge.png"
import "./Show.css"
function Show (){
    return(
        <div className="our-show">
            <div className="container">
                <div className="show-content row">
                    <div className="col-sm-12 col-md-6">
                        <img src={showimge} alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-5 text-left">
                        <h3>We pride ourselves on making real food from the best ingredients.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button className="show-btn">learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Show