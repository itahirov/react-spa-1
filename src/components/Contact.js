import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/commonStyle.css'
import '../styles/contactStyle.css'
import myKittyContact from '../images/meow-kitty.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <CSSTransitionGroup
      transitionName="feesTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div>
        <h2>Contact</h2>
        <p>Contact Us at the information below right meow!</p>
        <p> <a href="tel:919-555-1212"><FontAwesomeIcon icon={faPhone} /> 919-555-1212</a></p>
        <p><a href="mailto:acme@yahoo.com"><FontAwesomeIcon icon={faEnvelope} /> acme@yahoo.com</a></p>
        <img src={myKittyContact} alt="My Kitty" />
        </div>
       
    </CSSTransitionGroup>
    
    
    
  )
}

export default Contact;