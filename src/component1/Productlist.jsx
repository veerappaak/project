const Productlist = ( {products , title}) => {
    return ( 
        <div>
            <h2> {title} </h2>
            <div className="products">
                {products.map( (product)=>{
                    return(
                        <div className="product">
                             <img src={product.image} width="250px" height="300px" />
                             <h2> {product.product} </h2>
                             <h3> {product.brand} </h3>
                             <h4> {product.price} </h4>
                        </div>
                    )
                })}

            </div>
        </div>
     );
}
 
export default Productlist;