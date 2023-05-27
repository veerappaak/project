import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Home = () => {
    let [movies, setMovies] = useState(null);

    let [error ,setError] =useState(null);
    let [pending , setPending] = useState(true);

    useEffect(() => {
        if(localStorage.getItem("fav")==null){
            localStorage.setItem("fav" ,"[]")
        }
        setTimeout(() => {
            fetch("http://localhost:4000/movies")
                .then((res) => { return res.json() })
                .then((data) => {
                    console.log(data);
                    setMovies(data);
                    setPending(false);
                })
                .catch( (err)=>{console.log(err.message)})
                setPending(false);
        }, 3000)

    }, [])
    

    return (
        <div className="home">

            {pending === true && <h1>Loading.....</h1>}
            {error && <h1> {error} </h1>}
            
            {movies === null && <h1>Loading.....</h1>}

            {movies && 
            <Movieslist movies={movies} title="All movies" />}
            
            {movies && 
            <Movieslist movies={movies.filter( (m)=> {return m.hero.includes("Yash")})} title="Search result for yash" />}

            {movies && 
            <Movieslist movies={movies.filter( (m)=> {return m.genre.includes("action")})} title="Action movies" />}
            
            {movies && 
            <Movieslist movies={movies.filter( (m)=> {return m.rating >= 8.5})} title="Top rated movies" />}

        </div>
    );
}

export default Home;