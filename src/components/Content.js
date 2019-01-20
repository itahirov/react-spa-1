import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Fees from './Fees'
import Contact from './Contact'

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/fees" component={Fees} />
      <Route path="/contact" component={Contact} />
    </Switch>
  )
}

export default Content
