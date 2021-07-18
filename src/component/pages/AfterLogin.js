import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

let login_user2= JSON.parse(localStorage.getItem('login'))

console.log(login_user2,'login_user2');

export default class AfterLogin extends Component {

    constructor(props){
        super(props)
        this.state={
            login_user :{
                email:login_user2.email,
                password:login_user2.password
            }
        }

        // let {login_user} = this.state 
       
                
    }
    componentWillMount(){
        let {login_user} = this.state 

        login_user = {
            email:login_user2.email,
            password:login_user2.password
        }

        this.setState({
            login_user 
        })
        console.log(login_user,'login_user');

        
      }
    onChangeHandler(){
        
    }

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
                            <input value={this.state.email} onChange={this.onChangeHandler}  type="text" id="Email" name="Email" />
                        </div>
                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="password">Password</label>
                            <input type="password" value={this.state.password} onChange={this.onChangeHandler} id="password" name="password" required />
                        </div>
                        <br/>
                        <div className="">
                            <NavLink to='ChangePassword'><button type="submit" id="change_pass_button" className="btn btn-primary mr-2"> Change Password</button></NavLink>
                            <NavLink to='User'>  <button type="submit" id="logout_button" className="btn btn-primary ml-2"> Logout</button> </NavLink>
                        </div>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}
