import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Subscrib.css"
function Subscrib (){
    return(
        <div className="our-subscrib">
            <div className="container">
                <div className="subscrib-content">
                    <h3>Hurry up! Subscribe our newsletter
                      and get 25% Off</h3>
                    <p>Limited time offer for this month. No credit card required.</p>  
                    <div className="box">
                        <input type="email" className="email " placeholder="Email Adress Here"/>
                        <button className="subscrib">subscrib</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Subscrib