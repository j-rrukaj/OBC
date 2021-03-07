import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import Gallery from "./pages/Gallery/Gallery"
import Reviews from "./pages/Reviews/Reviews"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer"




function App() {
  return (
    <>
  
    <Navbar />

    <Home />

    <Services />

    <Gallery />

    <Reviews />

    <Contact />


    <Footer />
  

</>
  );
}

export default App;
