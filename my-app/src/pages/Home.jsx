import Navbar from '../components/Navbar';
import Row from '../components/Row';
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'
import React, {useEffect, useState} from "react";
import MovieCard from '../components/MovieCard';

const Home = () => {


  const [movies, setMovies] = useState([]);

 
    async function peliculas() {
        
      try { let response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1ecf4daf764af90f82ce01b58fd9ecc7",{ method:"GET"});
        const data = await response.json();
          setMovies(data.results)
 console.log(data.results);
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
    <Carrousel movies={movies} />
    <MovieCard movies={movies}/>
    <Footer/>
    </div>
    
)
}

export default Home;