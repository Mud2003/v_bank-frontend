import './signin.css';
import React from 'react'
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
      <div className="bg-green">
          <div className="log">
              <Link style={{textDecoration: 'none', color: 'black'}} to="/"><h1 className='h1'>dolla</h1></Link> 
          </div>
          <div className="blck-box">
              <h4>Sign in to your account</h4>
              <div className="in-field">
                  <label>Email :- </label>
                  <input type="email" className='in' />
              </div>
              <div className="in-field">
                  <label>Password :- </label>
                  <input type="password" className='in' />
              </div>
              <div className="sb-btn">
                  <button>Continue</button>
              </div>
          </div>
      </div>
  )
}
