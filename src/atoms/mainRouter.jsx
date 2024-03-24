import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WelcomePage from '../pages/WelcomePage'

const mainRouter = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <WelcomePage />
      </Route>
    </Switch>
  )
}
export default mainRouter
