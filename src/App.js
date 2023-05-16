import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/Pages/About/About';
import Discover from './components/Pages/Discover/Discover';
import Hero from './components/Pages/HeroPage/Hero';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Discover/>
    </>
  );
}

export default App;
