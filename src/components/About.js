import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/commonStyle.css'
import '../styles/aboutStyle.css'
import kitty from '../images/cute-kitty.jpg';

const About = () => {
  return (
    <CSSTransitionGroup
      transitionName="aboutTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
    
        <div>
           <h2>About</h2>
           <p>We started our pet sitting service in 2014 and we have many happy customers!</p>
          </div>
          <div>
 <img src={kitty} alt="cute kitty" />
                 </div>
    </CSSTransitionGroup>
  )
  
}

export default About
