import React from 'react'
import Header from './component/Header'
import { Route, Switch } from "react-router-dom";
import User from "./component/pages/User";
import Home from "./component/pages/Home";
import Page_404 from "./component/pages/Page_404";
import Task from "./component/pages/Task";
import Register from './component/pages/Register';
// import Register2 from './component/pages/Register2';
const App = () => {
  return (
    <>
      <div className="container">
      <Header />
      <Switch>         
        <Route exact path='/' component={Home} />
        <Route exact path='/Task' component={Task} />        
        <Route exact path='/Register' component={Register} />
        {/* <Route exact path='/Register2' component={Register2} /> */}
        <Route exact path='/User' component={User} />
        {/* <Route exact path='/User' component={User} /> */}
        <Route component={Page_404} />
      </Switch>  
      </div>    
    </>
  )
}

export default App
