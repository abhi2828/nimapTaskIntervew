import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class AfterLogin extends Component {
    render() {
        return (
            <>
               <div className="mainDiv">
                    <div className="cardStyle">
                        <form action method="post" name="signupForm" id="signupForm">
                        <img src id="signupLogo" />
                        <h2 className="formTitle">
                            User
                        </h2>

                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="confirmPassword">Email</label>
                            <input value='abc@gmail.com' type="text" id="Email" name="Email" />
                        </div>
                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="password">Password</label>
                            <input type="password" value='abc@gmail.com' id="password" name="password" required />
                        </div>
                        <br/>
                        <div className="">
                            {/* <button type="submit" id="change_pass_button" className="btn btn-primary mr-2"> Change Password</button> 
                            <button type="submit" id="change_pass_button" className="btn btn-primary ml-2"> Logout</button>  */}
                            <NavLink to='ChangePassword'><button type="submit" id="change_pass_button" className="btn btn-primary mr-2"> Change Password</button></NavLink>
                            <NavLink to='User'>  <button type="submit" id="change_pass_button" className="btn btn-primary ml-2"> Logout</button> </NavLink>
                        </div>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}
