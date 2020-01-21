import React from 'react'

import Header from '../../components/Header/Header'

var img1 = {
  left: 0,
  height: '240px',
  transition: 'left 2s, height 2s, opacity 2s',
  zIndex: 10002,
  opacity: 0
}
var img2 = {
  left: '28%',
  height: '300px',
  transition: 'left 1s ease-out, height 1s ease-out, opacity 2s',
  zIndex: 10003,
  opacity: 1
}
var img3 = {
  left: '56%',
  height: '240px',
  transition: 'left 2s, height 2s, opacity 2s',
  zIndex: 10001,
  opacity: 0
}

class HeaderContainer extends React.Component {
  state = {
    slides: [img1,img2,img3],
  }
  nextSlide = this.nextSlide.bind(this);
  prevSlide = this.prevSlide.bind(this);
  
  // woring part for array of slides with no animation
  /*nextSlide(e) {
    var newSlides = this.state.slides
    this.setState ({
      slides: newSlides.slice(1).concat(newSlides.slice(0, 1))
    })
  }
  prevSlide(e) {
    var newSlides = this.state.slides
    this.setState ({
      slides: newSlides.slice(-1).concat(newSlides.slice(0, -1))
    })
  }*/

  nextSlide(e) {
    this.setState ({
      slides: this.state.slides.slice(-1).concat(this.state.slides.slice(0, -1))   
    })
  }
  prevSlide(e) {
    this.setState ({
      slides: this.state.slides.slice(1).concat(this.state.slides.slice(0, 1))
    })
  }

  render(){
    return <Header 
        slides = {this.state.slides}
        nextSlide = {this.nextSlide}
        prevSlide = {this.prevSlide}
      />
  }

}

export default HeaderContainer