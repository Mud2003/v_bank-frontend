import './App.css';
import Home from './components/Pages/HomePage/Home';
import SignIn from './components/Pages/SignIn/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


