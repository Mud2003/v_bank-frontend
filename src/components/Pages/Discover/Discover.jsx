import './discover.css';
import React from 'react';
import svg from '../../../assets/svg.svg'

export default function Discover() {
  return (
    <div className="bg-color1">
        <div className="content2">
            <div className="imgcont1">
                <img src={svg} alt="svg" />
            </div>
            <div className="textcont1">
                <h5>UNLIMITED ACCESS</h5>
                <h2>Login to your <br /> account at any <br /> time.</h2>
                <p>We have you covered no matter where you are <br /> located. All you need is an internet connection <br /> and mobile or computer.</p>
                <div className="btm1">
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}
