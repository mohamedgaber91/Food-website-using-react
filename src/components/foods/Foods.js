import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import food1 from "../../imges/food-1.jpg"
// import food2 from "../../imges/food-2.jpg"
// import food3 from "../../imges/food-3.jpg"
// import food4 from "../../imges/food-4.webp"
// import food5 from "../../imges/food-5.jpg"
// import food6 from "../../imges/food-6.jpg"
// import food7 from "../../imges/food-7.jpg"
// import food8 from "../../imges/food-8.jpg"
// import food9 from "../../imges/food-9.jpg"
import "./Foods.css"
function Foods (){
    
    return(
        <div className="our-foods" id="foods">
            <div className="container">
                <div className="foods-heading">
                    <h3>Explore Our Foods</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
                <div className="foods-content">
                    <div className="food-1">
                        {/* <img src={food1} alt=""/> */}
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 15 - 20 Minutes | Serves: 1</p>
                        <h3>$10.50 <span className="span">$11.70</span> </h3>
                        <hr/>
                        <button className="order">order now</button>
                    </div>
                    <div className="food-2">
                        {/* <img src={food2} alt=""/> */}
                        <h5>Vegetarian Burger</h5>
                        <p>Time: 30 - 45 Minutes | Serves: 1</p>
                        <h3>$9.20 <span className="span">$10.50</span> </h3>
                        <hr/>
                        <button className="order">order now</button>
                    </div>
                    <div className="food-3">
                        {/* <img src={food3} alt=""/> */}
                        <h5>Raspberry Stuffed French Toast</h5>
                        <p>Time: 10 - 15 Minutes | Serves: 1</p>
                        <h3>$12.50 <span className="span">$13.20</span> </h3>
                        <hr/>
                        <button className="order">order now</button>
                    </div>
                    <div className="food-4">
                        {/* <img src={food4} alt=""/> */}
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 17 - 20 Minutes | Serves: </p>
                        <h3>$10 <span className="span">$15</span> </h3>
                        <hr/>
                        <button className="order">order now</button>
                    </div>
                    <div className="food-5">
                        {/* <img src={food5} alt=""/> */}
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 4 - 9 Minutes | Serves: 1</p>
                        <h3>$10 <span className="span">$19</span> </h3>
                        <hr/>
                        <button className="order">order now</button>
                    </div>
                    <div className="food-6">
                        {/* <img src={food6} alt=""/> */}
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 22 - 25 Minutes | Serves: 1</p>
                        <h3>$18 <span className="span">$19</span> </h3>
                        <hr/>
                        <button className="order">order now</button>
                    </div>
                    <div className="food-7">
                        {/* <img src={food7} alt=""/> */}
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 6 - 98 Minutes | Serves: 1</p>
                        <h3>$51 <span className="span">$55.4</span> </h3>
                        <hr/>
                        <button className="order">order now</button>
                    </div>
                    <div className="food-8">
                        {/* <img src={food8} alt=""/> */}
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 15 - 20 Minutes | Serves: 1</p>
                        <h3>$20 <span className="span">$25.70</span> </h3>
                        <hr/>
                        <button className="order">order now</button>
                    </div>
                    <div className="food-9">
                        {/* <img src={food9} alt=""/> */}
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 5 - 10 Minutes | Serves: 1</p>
                        <h3>$18 <span className="span">$11.70</span> </h3>
                        <hr/>
                        <button className="order">order now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Foods