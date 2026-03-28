import Navbar from '../components/Navbar';
import Row from '../components/Row';
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'
import React, {useEffect, useState} from "react";
import MovieCard from '../components/MovieCard';

const Home = () => {


  const [movies, setMovies] = useState([]);

 
    async function peliculas() {
        
      try { let response = await fetch("https://archive.org/advancedsearch.php?q=mediatype:movies&fl[]=identifier,title&rows=10&output=json",{ method:"GET"});
        const data = await response.json();
          console.log(data)
        setMovies(data.response.docs);
      } 

      catch (error) {
      return  console.log("Error:", error);
      }  }

useEffect(()=>{
     peliculas();
},[])
return(
 <div>
    <Navbar/>
    <Carrousel />
    <MovieCard movies={movies}/>
    <Footer/>
    </div>
    
)
}

export default Home;