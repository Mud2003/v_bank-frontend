import './footer.css';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className="foot-bg">
        <div className="f-l-section">
            <div className="set">
                <h5>About Us</h5>
                <ul className='ul'>
                    <li>How it works</li>
                    <li>Testimonials</li>
                    <li>Destinations</li>
                    <li>Sponsorships</li>
                </ul>
            </div>
            <div className="set">
                <h5>Contact Us</h5>
                <ul className='ul'>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Careers</li>
                    <li>Terms of Services</li>
                </ul>
            </div>
            <div className="set">
                <h5>Videos</h5>
                <ul className='ul'>
                    <li>Submit Video</li>
                    <li>Ambassadors</li>
                    <li>Agency</li>
                    <li>Influencer</li>
                </ul>
            </div>
            <div className="set">
                <h5>Social Media</h5>
                <ul className='ul'>
                    <li>Facebook</li>
                    <li>Instargram</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
        <div className="foot-f">
            <div className="logo">
                <h2>dolla</h2>
            </div>
            <div className="rights">
                <p>Muditha@2023 All rights reserved.</p>
            </div>
            <div className="icons">
                <a href="/"><FacebookIcon/></a>
                <a href="/"><InstagramIcon/></a>
                <a href="/"><YouTubeIcon/></a>
                <a href="/"><TwitterIcon/></a>
                <a href="/"><LinkedInIcon/></a>
            </div>
        </div>
    </div>
  )
}
