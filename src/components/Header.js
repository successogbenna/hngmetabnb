import React from 'react';
import { useAppContext } from './Context'
import { Link } from 'react-router-dom'
function Header() {
      const { handleClick, handleClicks, click, nav } = useAppContext()
    return (
       <div className={nav ? "nav-bar active" : "nav-bar"}>
    <div className="container">
      <div className='nav'>
       <Link to='/'>
        <img src="/assets/meta-logo.svg" alt="logo" />
       </Link>

        <div className={click ? "lists active" : "lists"}>
          <li className={click ? 'active' : ''}
          onClick={handleClicks}
          >
            <Link to='/'>Home</Link>
          </li>

          <li className={click ? 'active' : ''}
          onClick={handleClicks}
          >
            <Link to='/placetostay'>Place to stay</Link>
          </li>

          <li className={click ? 'active' : ''}
          onClick={handleClicks}
          >NFTs</li>

          <li className={click ? 'active' : ''}
          onClick={handleClicks}
          >Community</li>

          <button onClick={handleClick} 
          className={click ? 'mobile-btn active' : 'mobile-btn'}>Connect Wallet</button>
        </div>

        <button onClick={handleClick}>Connect Wallet</button>

        <div className="hamburger" onClick={handleClicks}>
          <i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </div>
    </div>
    );
}

export default Header;