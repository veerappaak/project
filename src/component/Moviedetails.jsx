import { useState ,useEffect } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import Movieslist from "./Movieslist";
import Relevant from "./Relevant";
import Addmovie from "./Addmovie";

const Moviedetails = () => {
   let{ id } = useParams();
   let Navigate = useNavigate();
   let [movie ,setMovie] =useState(null);
   let [error , setError] = useState(null);
   let [pending , setPending] = useState(true);

   let [displayEditbox , setdisplayEditbox] = useState(false);

   useEffect(() => {
    setMovie(null);
    setPending(true);
    setTimeout(() => {
        fetch("http://localhost:4000/movies/"+id)
            .then((res) => { return res.json() })
            .then((data) => {
                console.log(data);
                setMovie(data);
                setPending(false);
            })
            .catch( (err)=>{setError("404 Network issue !! please try agian latter");
            setPending(false);
              })
    }, 3000)
}, [id])

    let deleteMovie = ()=>{
        fetch("http://localhost:4000/movies/"+id , {method : "DELETE"})
        .then( ()=>{Navigate("/")})
    }
    return ( 
        <div className="movie-details-body">
            <h1 id="movieh1">Movie Details Components</h1>
           {pending == true && <div className="loading"></div>}
           {error && <h1> {error} </h1>}

           {movie && <div className="movie-details">
           <div className="trailer-column">
            <h1>watch complte movie</h1>
            <img src={movie.poster} alt="poster" /><br />
            <h1> Movie: {movie.moviename} </h1><br />
            <h3>Actor: {movie.hero}</h3><br />
            <p> Director: {movie.director}</p><br />
            <p> Language:  {movie.languages.join(" , ")}</p><br />
            <p> Genre: {movie.genre}</p><br />
            <h3> Story Line:</h3><br />
            <p>Synopsis: {movie.synopsis}</p>
            </div>
            
            <div className="trailer-column">
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>}
            <button onClick={deleteMovie}>Delete</button>
            <Link to={`/edit/${id}`}><button>Update</button></Link>

            {movie && <Relevant genre={movie.genre}/>}

  
        </div>
     );
}
 
export default Moviedetails;