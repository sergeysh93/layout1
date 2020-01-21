import React from 'react'
import './Content.scss'

const Content = (props) => {

  const a1Text = 'Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
  const a2Text = 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.'
  const a3Text = 'Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.'
  const twitter = 'JamesBliss'
  const name = ['Marchin Gora', 'Steven Bluck']
  const pos = ['Managing Director Apple UK', 'Technical Director Audi International']
  const website = ['Apple.co.uk', 'Audi.com']
  
  return (
    <content>
      <div className='content-upper'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-8 row'>
              {
                Array.from(Array(4), (e, i) => {
                  return (
                    <div className='card small-card col-12 col-md-6 row' key={i}>
                      <div className='card-image col-2 cold-lg-3'>
                        <img src={require('../../media/card-shape.png')} alt='..'/>
                      </div>
                      <div className='card-content col-10 col-lg-9'>
                        <h6 className='card-header'>Pixel Perfect Design</h6>
                        <p className='card-text'>Gorgeous design with time and attention dedicated to each and every pixel.</p>
                      </div>
                    </div>
                  )
                })

              }
            </div>
            <div className='card big-card col-12 col-lg-4'>
              <div className='card-content'>
                <h6 className='card-header'>Pixel Perfect Design</h6>
                <p className='card-text'>Gorgeous design with time and attention dedicated to each and every pixel.Gorgeous design with time and attention dedicated to each and every pixel.</p>
              </div>
              <div className='row justify-content-between'>
                <button className='btn'>Feature Tour</button>
                <button className='btn'>Purchase Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='content-bottom'>
        <div className='content-info container'>
          <div className='row justify-content-between'>
            <div className='content-about col-12 col-lg-4'>
              <h5>Endlessly configureable content.</h5>
              <p>{a1Text}</p>
              <p>{a2Text}</p>
              <p>{a3Text}</p>
            </div>
            <div className='content-screenshots col-12 col-lg-4'>
              <h5>The right blend of widgets and options..</h5>
              <div className='screenshot'>
                <img src={require('../../media/theme-options.png')} alt='..'/>
                <div className='content-desc'>Only option that are needed, none of the bloat.</div>
              </div>
              <div className='screenshot'>
                <img src={require('../../media/widgets.png')} alt='..'/>
                <div className='content-desc'>12 extra helpings of widgety goodness. Mmmm.</div>
              </div>
            </div>
            <div className='content-screencast col-12 col-lg-4'>
              <h5>Take a look behind the scenes.</h5>
              <p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
              <div className='redux-logo'>
              </div>
              <div className='content-desc'>Overview of options and widgets - 2 mins 33 secs.</div>
            </div>
          </div>
        </div>
        <div className='content-callout container'>
          <div className='row align-items-center'> 
            <div className='col-12 col-lg-9'>
              <h3>Join the cool kids and get your copy of Redux now...</h3>
              <p>Redux is availible for the rediculously low, one-time cost of $37! That's right, I'm practically giving it away!</p>
            </div>
            <div className='col-12 col-lg-3'>
              <button className='btn'>
                Yes, I want this theme now!
              </button>
            </div>
          </div>
        </div>
        <div className='content-reviews container'>
          <div className='row justify-content-between'>
            <div className='content-blog col-12 col-md-6 col-lg-4'>
              <h4>Ramblings from the Redux Blog.</h4>
              {
                Array.from(Array(4), (e, i) => {
                  return (
                    <div className='card' key={i}>
                      <div className='row'>
                        <div className='col-2 col-md-2 col-lg-3'>
                          <img src={require('../../media/ph-review-image.png')} className='card-img' alt='...'/>
                        </div>
                        <div className='col-10 col-md-10 col-lg-9 mr-auto'>
                          <p className='card-text'>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh</p>
                          <div className='additional-text'>November 7 2010, 2 comments</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className='content-tweets col-12 col-md-6 col-lg-4'>
              <h4>Musings in 140 characters or less.</h4>
              {
                Array.from(Array(4), (e, i) => {
                  return (
                    <div className='card' key={i}>
                        <p className='card-text'><a className='twitter-text' href={'http://www.twitter.com/'+twitter}>@{twitter}</a> Hard to get get a balance for those that know their way around WP/HTML/CSS and those that don't I find 
                          <span className='additional-text'> 33 minutes ago</span>
                        </p>
                    </div>
                  )
                })
              }
            </div>
            <div className='content-testimonials col-12 col-md-12 col-lg-4'>
              <h4>What customers are saying'.</h4>
              {
                Array.from(Array(2), (e, i) => {
                  return (
                    <div className='card big-card' key={i}>
                      <div className='row'>
                        <div className='col-2 col-lg-3'>
                          <img src={require('../../media/ph-review-image.png')} className='card-img' alt='...'/>
                        </div>
                        <div className='col-10 col-lg-9 mr-auto'>
                          <h5>{name[i]}</h5>
                          <h6>{pos[i]}</h6>
                          <div className='additional-text'>{website[i]}</div>
                        </div>
                      </div>
                      <p className='card-text'>{'“'+a1Text+'”'}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>          
      
    </content>
  )
}

export default Content