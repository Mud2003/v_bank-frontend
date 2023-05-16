import './services.css';
import React from 'react';
import svg from '../../../assets/svg.svg';
import svg1 from '../../../assets/svg1.svg';
import svg2 from '../../../assets/svg2.svg';

export default function Services() {
  return (
    <div className="bg-color2">
        <div className="ourservice-cont">
            <h1>Our Services</h1>
            <div className="cards">
                <div className="card1">
                    <img src={svg} alt="0" />
                    <h6>Reduce Expenses</h6>
                    <p>We help reduce your fees and increase your overall revenue.</p>
                </div>
                <div className="card2">
                    <img src={svg1} alt="1" />
                    <h6>Virtual Officers</h6>
                    <p>You can access our platform online anywhere in the world.</p>
                </div>
                <div className="card3">
                    <img src={svg2} alt="2" />
                    <h6>Premium Benefits</h6>
                    <p>Unlock our special membership card that returns 5% cash back.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
