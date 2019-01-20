import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/commonStyle.css'
import '../styles/feesStyle.css'
import myDoggie from '../images/doggoneit.jpg';

const Fees = () => {
  return (
    <CSSTransitionGroup
      transitionName="feesTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
     
        <div>
          <h2>Fees</h2>
          <p>We charge $50 for an hour, $200 for a half a day, and $400 for a full day.</p>
          <p>We also have special weekend rates of $500 for two days (Saturday and Sunday).</p>
        <img src={myDoggie} alt="doggone it" />
          </div>
       
    </CSSTransitionGroup>
  )
}

export default Fees
