import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
function App() {
  return (
    <>
      <Particles
        className='particles-canvas'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts />
    </>
  );
}

export default App;
