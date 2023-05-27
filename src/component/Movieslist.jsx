import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movieslist = ({ movies, title }) => {
    // let handleAddtofav = (movie)=>{
    // let fav = JSON.parse(localStorage.getItem("fav"));
    // fav.push(movie);
    // fav = JSON.stringify(fav);
    // localStorage.setItem("fav" , fav);
    // alert("Movie added to favorites List")
    // }

    let [favId ,setFavId] = useState([]);
    let[altred ,setAltred] = useState(0);
    
    useEffect( ()=>{
        let fav= JSON.parse(localStorage.getItem("fav"))
        setFavId(fav.map( (m)=>{return m.id}))
    } ,[altred])

    let add= (movie)=>{
        let fav=JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        fav = JSON.stringify(fav);
        localStorage.setItem("fav" ,fav);
        setAltred(altred+1);
    }

    let remove = (id)=> {
        let fav= JSON.parse(localStorage.getItem("fav"));
        fav = fav.filter( (m) =>{return m.id !=id})
        localStorage.setItem("fav" , JSON.stringify(fav));
        setAltred(altred+1);
    }
    return (
        <div>
            <h1 id="title">{title}</h1>

         <div className="movies">
                {movies.map((movie) => {
                    return (
                        <div className="movie">
                            {/* <button onClick={()=>{ handleAddtofav(movie)}}> 💟 </button> */}
                {favId && favId.includes(movie.id) ? 
                            <button className="remove-btn" onClick={ ()=>{remove(movie.id)}}><i class='bx bx-heart'></i></button>:
                            <button className="add-btn" onClick={ ()=>{add(movie)}}><i class='bx bxs-heart' ></i></button> 
                             }

                           <Link to= { `/moviedetails/${movie.id}` }>    
                           <img src={movie.poster} width="250px" height="300px" />
                            <h1>{movie.moviename}</h1>
                            <p>{movie.genre}</p>
                           </Link>
                        </div>
                    )
                })}
         </div>
        </div>
    );
}

export default Movieslist;