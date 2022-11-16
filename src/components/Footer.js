import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="foot">
          <div>
            <Link to='/'>
              <img src="/assets/meta-footer-logo.svg" alt="footer" />
            </Link>
            <div className="social">
              <img src="/assets/facebook.svg" alt="facebook" />
              <img src="/assets/instagram.svg" alt="instagram" />
              <img src="/assets/twitter.svg" alt="twitter" />
            </div>
            <p>
              © 2022 Metabnb
            </p>
          </div>
          <div className="sub-foot">
          <div className='footer-link'>
            <h5>Community</h5>
            <ul>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>

          <div className='footer-link'>
            <h5>Places</h5>
            <ul>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>
          </div>

          <div className='footer-link'>
            <h5>About us</h5>
            <ul>
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer