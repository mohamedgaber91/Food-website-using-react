import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./BtnUp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
window.onscroll=()=>{
    if(window.pageYOffset>=500 ){
    document.querySelector(".btn-up").style.display="block"
    }else{
        document.querySelector(".btn-up").style.display="none"
    }
    document.querySelector(".btn-up").onclick=()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }
}



function BtnUp (){
    return(
        <button className="btn-up"><FontAwesomeIcon icon={faUpLong} color="white" /></button>
    )
}
export default BtnUp