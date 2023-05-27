import Addmovie from "./component/Addmovie";
import Editmovie from "./component/Editmovie";
import Favorites from "./component/Favorites";
import Searchpage from "./component/Searchpage";
import Home from "./component/Home";
import Moviedetails from "./component/Moviedetails";
import Navbar from "./component/Navbar";
import{BrowserRouter , Routes ,Route} from 'react-router-dom'

//!used router methods
function App() {
 
  return (
     <BrowserRouter>
       <div className="App">
            <Navbar/>
            <Routes>
              
              <Route path ="/" element= { <Home/> } />
              <Route path ="/add" element= {<Addmovie/>} />
              <Route path ="/moviedetails/:id" element= {<Moviedetails/>} />
              <Route path="/fav" element={<Favorites/>}/>
              <Route path="/search/:searchword" element={<Searchpage/>}/>
              <Route path="/edit/:id" element={<Editmovie/>}/>

            </Routes>
       </div>
     </BrowserRouter>
   
  );
}
export default App;

// function App(){
//   return(
//     <div className="App">

//     </div>
//   );
// }
// export default App;


/* //!PRODUCT APP() PROPERTY */ 

/*import Productnavbar from "./component1/Productnavbar";
import Producthome from "./component1/Producthome";
import Addproduct from "./component1/Addproduct";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
       <div>
          <Productnavbar/>
          <Routes>
            <Route path="/" element={<Producthome/>} />
            <Route path="/addproduct" element={<Addproduct/>} />
          </Routes>
       </div>
    </BrowserRouter>
  );
}
export default App;
*/

/*//! SPOTIFY APP() PROPERTY */
/*import Spotifyhome from "./component2/Spotifyhome";
import Spotifynavbar from "./component2/Spotifynavbar";
function App(){
  return(
    <div>
   <Spotifynavbar/>
   <Spotifyhome/>
    </div>
  );
}
export default App;*/