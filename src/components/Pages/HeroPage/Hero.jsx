import "./hero.css";
import Bg from "../../../assets/Bg.mp4";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  return (
    <div className="hero-section">
      <video src={Bg} type='video/mp4' autoPlay loop muted/>
      <div className="content">
        <h1>Virtual Banking Made Easy</h1>
        <p>Sign up for a new account today and receive $250 <br/> in credit towards your next payment.</p>
        <div className="bt">
          <button>Get Started <ArrowForwardIcon/></button>
        </div>
      </div>
    </div>
  )
}
