import images from "../../public/images/amazon.png"

import shoes from "../../public/images/hero-image.png"
import flip_logo from "../../public/images/flipkart.png"
const HeroSection=()=>{
    return(
        <main className="hero container">
            <div className="hero-content">
            <h1>
                Your Feet Deserve The Best
            </h1>
            <p>Your Feet Diserve The best And We Are Here To Help You With Our Shoes. </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn"> Category</button>
            </div>
            <div className="shopping">
                <p> Also Avilable On</p>
                <div className="brand-icons">
                    <img src={images} alt="amazon_logo" />
                    <img src={flip_logo} alt="flipkart_logo" />
                </div>
            </div>
            </div>
            <div className="hero-image">
                <img src={shoes} alt="background"></img>

            </div>
        </main>
    );

};
export default HeroSection;