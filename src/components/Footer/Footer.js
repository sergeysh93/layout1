import React from 'react'
import './Footer.scss'

const Footer = (props) => {
  return (
    <footer>
      <div className='footer-main'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-8'>
              <h3 className='footer-header'>If you’re using Redux then we want to hear from you!</h3>
              <p className='footer-text'>Sed ornare dictum mi, sed rutrum metus condimentum sodales. Fusce quis tellus mollis sapien porta placerat. In dapibus velit eget felis rutrum posuere. Pellentesque tincidunt augue vitae diam auctor id fermentum ante elementum. estibulum in luctus urna. Vivamus euismod, ligula eu commodo accumsan.</p>
              <p className='footer-contacts'>Email: <span className='highlight'>hello@redux.com</span>   Tel: 1-408-996-1010</p>
            </div>
            <div className='col-md-12 col-lg-4'>
              <h3 className='footer-header'>Subscribe and get the inside scoop.</h3>
              <p className='footer-text'>Subscribe to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
              <form className='subscribe-form'>
                <input type='text' placeholder='enter your email address'></input>
                <input type='button' value='subscribe'></input>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-secondary'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-12 col-lg-8'>
              <p className='footer-text'>Copyright 2010 <span className='highlight'>Redux Theme</span>. All Rights Reserved.</p>
            </div>
            <div className='col-md-12 col-lg-4'>
              <p className='footer-text'>Powered by <span className='highlight'>WordPress. Redux Theme</span> by <span className='highlight'>Orman</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer