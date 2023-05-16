import "./about.css";
import React from 'react'
import svg from '../../../assets/svg.svg'

export default function About() {
  return (
    <div className="bg-color">
        <div className="content1">
            <div className="textcont">
                <h5>PREMIUM BANK</h5>
                <h2>Unlimited <br /> Transaction with <br /> zero fees</h2>
                <p>Get access to our exclusive app that allows you <br /> to send unlimited transaction without getting <br /> charged any fees</p>
                <div className="btm">
                    <button>Get Started</button>
                </div>
            </div>
            <div className="imgcont">
                <img src={svg} alt="svg" />
            </div>
        </div>
    </div>
  )
}
