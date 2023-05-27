import { Link } from "react-router-dom";

const Productnavbar = () => {
    return ( 
        <nav>
        <div id="logo">
            <Link to="/">  <h1>Shirt Shop </h1> </Link>
           
            <img src="" alt="" />
        </div>
        <div id="search-bar">
            <input type="search" placeholder="Search products" />
            <button>search</button>
        </div>
        <div id="product">
            <Link to="/addproduct">Add Product</Link>
        </div>
    </nav>
     );
}
 
export default Productnavbar;