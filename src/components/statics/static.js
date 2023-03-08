import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./static.css"
function Statics(){
 window.onscroll=()=>{
   if(window.pageYOffset>=600){
      let h3=document.querySelectorAll("#h3")
      setInterval(()=>{
        h3.forEach((el)=>{
         if (el.innerHTML<=parseInt (el.dataset.value)){
            el.innerHTML++
         }
        })
         
       },1000)
   }
 }
    return(
        <div className="our-statics">
            <div className="container">
                <div className="statics-content">
                   <div className="stat-1">
                      <h3 id="h3" data-value="788">0</h3>
                      <p>SAVINGS</p>
                   </div>
                   <div className="stat-2">
                      <h3 id="h3" data-value="244">0</h3>
                      <p>PHOTOS</p>
                   </div>
                   <div className="stat-3">
                      <h3 id="h3" data-value="641">0</h3>
                      <p>ROCKETS</p>
                   </div>
                   <div className="stat-4">
                      <h3 id="h3" data-value="398">0</h3>
                      <p>GLOBES</p>
                   </div>
                   {/* <button onClick={()=>change()}>click</button> */}
                </div>
            </div>
        </div>
     
    )
}
export default Statics