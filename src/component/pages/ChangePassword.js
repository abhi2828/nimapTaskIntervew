import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

let login_user_details= JSON.parse(localStorage.getItem('login'))
let registerUsers = JSON.parse(localStorage.getItem('users'))

export default class ChangePassword extends Component {
    state ={
        change_login_user :{
            email:'',
            password:''
        }
    }
    onclick_pass_change=(e)=>{
        let {change_login_user} = this.state      
        change_login_user[e.target.name] = e.target.value

        this.setState({
            change_login_user :{
                email:'',
                password:''
            }
        })
    }
    onChangeHandler=(e)=>{
        console.log(e.target.value);
        // registerUsers.find(e => e.email === login_user_details.email && e.password === login_user_details.password ?  :  );

        let {change_login_user} = this.state      
        // change_login_user[e.target.name] = e.target.value

        // this.setState({
        //     change_login_user
        // })
    }
    
    componentDidMount(){
    let { change_login_user } = this.state
    change_login_user.email = login_user_details.email
    change_login_user.password = login_user_details.password
        this.setState({
            change_login_user
        })
    }
    render() {
        return (
            <>
               <div className="mainDiv">
                    <div className="cardStyle">
                        <form method="post" name="signupForm" id="signupForm">
                        <h2 className="formTitle">
                            Change Password
                        </h2>

                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="confirmPassword">Email</label>
                            <input value={this.state.change_login_user.email} onChange={this.onChangeHandler} onClick={this.onclick_pass_change} type="text" id="Email" name="Email" />
                        </div>
                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="password">New Password</label>
                            <input value={this.state.change_login_user.password} onChange={this.onChangeHandler} type="text" id="password" name="password" />
                        </div>
                        <br/>
                        <div className="">
                            {/* <button type="submit" id="change_pass_button" className="btn btn-primary mr-2"> Save Password</button> 
                            <button type="submit" id="change_pass_button" className="btn btn-primary ml-2"> Logout</button>  */}
                            <NavLink to='/AfterLogin'><button type="submit" id="change_pass_button" className="btn btn-primary mr-2"> Save Password</button></NavLink>
                            <NavLink to='/User'>  <button type="submit" id="change_pass_button" className="btn btn-primary ml-2"> Logout</button> </NavLink>
                        </div>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}
