import { useEffect, useState } from "react";
import Productlist from "./Productlist";

const Producthome = () => {
    let[products , setProducts] = useState(null);

    useEffect( ()=>{
        fetch("http://localhost:5000/products")
        .then( (res)=>{ return res.json()})
        .then( (data)=>{
            console.log(data);
            setProducts(data);
        })
    },[])
    return ( 
        <div className="pdcthome">
            {products == null && <h1>Loading....</h1>}

            {products && 
            <Productlist products={products} title ="All product"/>}

            {products && 
            <Productlist products={products.filter( (p)=> {return p.brand.includes("peterenglang")})} title="Brand collects" />}

            {products && 
            <Productlist products={products.filter( (p)=> {return p.type.includes("casual")})} title="Brand type collects" />}


        </div>
     );
}
 
export default Producthome;