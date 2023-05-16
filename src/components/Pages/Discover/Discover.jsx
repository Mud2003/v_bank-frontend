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
                <h5>PREMIUM BANK</h5>
                <h2>Unlimited <br /> Transaction with <br /> zero fees</h2>
                <p>Get access to our exclusive app that allows you <br /> to send unlimited transaction without getting <br /> charged any fees</p>
                <div className="btm1">
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}
