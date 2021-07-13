import React from 'react'
import Header from './component/Header'
import { Route, Switch } from "react-router-dom";
import User from "./component/pages/User2";
import Home from "./component/pages/Home";
import Page_404 from "./component/pages/Page_404";
import Task from "./component/pages/Task";
const App = () => {
  return (
    <>
      <div className="container">
      <Header />
      <Switch>         
        <Route exact path='/' component={Home} />
        <Route exact path='/Task' component={Task} />
        <Route exact path='/User' component={User} />
        <Route component={Page_404} />
      </Switch>  
      </div>    
    </>
  )
}

export default App
