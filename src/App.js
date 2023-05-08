import Navbar from "./components/NavBar"
import SocialLinks from "./components/SocialLinks";
import Home from "./components/home.jsx";
import Abouts from "./components/Abouts"
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Foot from "./components/Foot";



function App() {
  return (
   <div>
      <Navbar />
      <Home />
      <Abouts />
      <Portfolio />
      <Experience />
      <Contact />
      <Foot />
      
      <SocialLinks/>
   </div>

  );
}

export default App;
