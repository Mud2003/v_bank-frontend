import './signup.css';
import React from 'react';
import svg from '../../../assets/svg.svg'

export default function SignUp() {
  return (
    <div className="bg-color0">
        <div className="content1">
            <div className="textcont">
                <h5>JOIN OUR TEAM</h5>
                <h2>Creating an <br /> account extremely <br /> easy</h2>
                <p>get everything set up and ready in under 10 <br /> minutes. All you need to do is add your <br /> information and you're ready to go.</p>
                <div className="btm0">
                    <button>Start Now</button>
                </div>
            </div>
            <div className="imgcont">
                <img src={svg} alt="svg" />
            </div>
        </div>
    </div>
  )
}
