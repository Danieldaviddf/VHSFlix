import logo1 from "./assets/logo1.png";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Row from './components/Row';
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar/>
    <Carrousel/>
    <Row/>
    <Footer/>
    </div>
  );
}

export default App;
