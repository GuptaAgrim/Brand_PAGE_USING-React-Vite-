import logo from "../../public/images/brand_logo.png"
const Navigation =()=>{
    return(
<nav className="conatiner">
    <div className="logo">
      <img src={logo}alt="Logo"></img>
    </div>
    <ul>
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>
    <button>Log-In</button>
   </nav>
    );
};
export default Navigation