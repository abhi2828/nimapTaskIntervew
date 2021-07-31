import React from 'react'
import Header from './component/Header'
import { Route, Switch } from "react-router-dom";
import User from "./component/pages/User";
import Home from "./component/pages/Home";
import Page_404 from "./component/pages/Page_404";
import Task from "./component/pages/Task";
import Register from './component/pages/Register';
import ChangePassword from './component/pages/ChangePassword';
import AfterLogin from './component/pages/AfterLogin';
const App = () => {
  return (
    <>
      <div className="container">
      <Header />
      <Switch>         
        <Route exact path='/' component={Home} />
        <Route exact path='/nimapTaskIntervew' component={Home} />
        <Route exact path='/Task' component={Task} />        
        <Route exact path='/Register' component={Register} />
        <Route exact path='/User' component={User} />
        <Route exact path='/ChangePassword' component={ChangePassword} />
        <Route exact path='/AfterLogin' component={AfterLogin} />
        <Route component={Page_404} />
      </Switch>  
      </div>   
       
    </>
  )
}



export default App
