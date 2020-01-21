import React from 'react'

import './Header.scss'

const Header = (props) => {
  return (
    <header className='header'>
    <div className='container'>
      {/* navigation bar*/}
      <nav className='navbar navbar-expand-md navbar-light'>
        <a className='navbar-brand' href='#'>Redux</a>
        <span className='navbar-text mr-auto'>Super-Dooper Business</span>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggler01' aria-controls='navbarToggler01' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarToggler01'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item dropdown'>
              <a className='nav-link'>Features</a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='#'>Meet the Team</a>
                <a className='dropdown-item' href='#'>Pricing Tables</a>
                <a className='dropdown-item' href='#'>Gallery Page</a>
                <div className='dropdown-sub'>
                  <a className='dropdown-item' href='#'>Portfolio 3 Column</a>
                  <div className='dropdown-submenu'>
                    <a className='dropdown-item' href='#'>2nd level submenu here</a>
                    <a className='dropdown-item' href='#'>2nd level submenu here n2</a>
                  </div>
                </div>
                <a className='dropdown-item' href='#'>Portfolio 4 Column</a>
                <a className='dropdown-item' href='#'>Full Width</a>
                <a className='dropdown-item' href='#'>Archives</a>
                <a className='dropdown-item' href='#'>Contact Form</a>  
              </div>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link'>Templates</a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='#'>Action</a>
                <a className='dropdown-item' href='#'>Another action</a>
                <a className='dropdown-item' href='#'>Something else here</a>
                <a className='dropdown-item' href='#'>Separated link</a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Shortcodes</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Portfolio</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Blog</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* rest header*/}
      <div className='header-text'>
        <div className='header-title'>
          The Theme You've Been Waiting For. Seriously.
        </div>
        <div className='header-desc'>
          A beautiful, unique, powerful, WordPress theme that oooozes quality, is jammed-packed with features,
          is ripe for customisation and better yet, kind to your wallet - sounds almost too good to be true!
        </div>   
      </div>
      <div className='header-slider container-fluid'>
        <button className='slider-button-left' onClick={props.prevSlide}>
          <img src={require('../../media/arrow-left.png')} alt='left-arrow' />
        </button>
        <button className='slider-button-right' onClick={props.nextSlide}>
          <img  src={require('../../media/arrow-right.png')} alt='right-arrow' />
        </button>
        <div className='slide-img slide-img1' style={props.slides[0]}></div>
        <div className='slide-img slide-img2' style={props.slides[1]}></div>
        <div className='slide-img slide-img3' style={props.slides[2]}></div>
      </div>
    </div>
    </header>
  )
}

export default Header