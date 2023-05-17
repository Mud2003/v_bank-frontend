import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import About from './components/Pages/About/About';
import Discover from './components/Pages/Discover/Discover';
import Hero from './components/Pages/HeroPage/Hero';
import Services from './components/Pages/Services/Services';
import SignUp from './components/Pages/SignUp/SignUp';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Discover/>
      <Services/>
      <SignUp/>
      <Footer/>
    </>
  );
}

export default App;
