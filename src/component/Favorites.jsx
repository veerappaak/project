import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Favorites = () => {
    let[favoriteMovies ,setFav] =useState(null);
    
      useEffect( ()=>{
        setFav(JSON.parse(localStorage.getItem("fav")))
}, [])
    return ( 
        <div className="favorite">
            {favoriteMovies &&
            <Movieslist movies = {favoriteMovies} title="Favorite movie"/>}
        </div>
     );
}
 
export default Favorites;