import Navbar from "./components/NavBar"
import SocialLinks from "./components/SocialLinks";
import Home from "./components/home.jsx";
import Abouts from "./components/Abouts"
// import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
// import Foot from "./components/Foot";
import Carousel from "./components/Carousel";
// import DNA from './components/dna.jsx'



function App() {
  return (
   <div>
      <Navbar />
      <Home />
      <SocialLinks/>
      <Abouts />
      <Carousel/>
      {/* <Portfolio /> */}
      <Experience />
      <Contact />
  
   </div>

  );
}

export default App;
