import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/homeStyle.css'
import doggie from '../images/augie-doggie.jpg';


const Home = () => {
  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      
             <div>
         
     <p>Welcome to the Acme Pet Sitting Service website! We are a certified service for your favorite pet when you are on vacation.</p>
     
               </div>
               <div>
 <img src={doggie} alt="augie doggie" />
                 </div>
    </CSSTransitionGroup>
  
  )


  }




export default Home;
