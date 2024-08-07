import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './componentes/navBar/NavBar';
import Footer from './componentes/footer/footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
);
}
export default App;