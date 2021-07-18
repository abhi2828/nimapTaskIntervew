import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

let login_user_details= JSON.parse(localStorage.getItem('login'))

console.log(login_user_details,'login_user_details');

export default class AfterLogin extends Component {

    constructor(props){
        super(props)
        this.state={
            isPasswordVisble: false,
            login_user :{
                email:'',
                password:''
            }
        }
       
                
    }

 // toggle password eye icon
      handleMouseDownPassword = ()=>{

        const {isPasswordVisble} = this.state
          this.setState({
            isPasswordVisble: !isPasswordVisble
          })
                
      }

    componentDidMount(){
        let {login_user} = this.state 

        login_user = {
            email:login_user_details.email,
            password:login_user_details.password
        }

        this.setState({
            login_user 
        })
        console.log(login_user,'login_user');        
      }     

    onChangeHandler=(e)=>{
        
    }
    
    

    render() {

        const {isPasswordVisble} = this.state
        return (
            <>
               <div className="mainDiv">
                    <div className="cardStyle">
                        {/* <form method="post" name="signupForm" id="signupForm"> */}
                        <h2 className="formTitle">
                            User
                        </h2>

                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="confirmPassword">Email</label>
                            <input value={this.state.login_user.email} onChange={this.onChangeHandler}  type="text" id="Email" name="Email" />
                        </div>
                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="password">Password</label>
                            <div className="pass_icon">
                                <input type={isPasswordVisble ? 'text' : "password" } value={this.state.login_user.password} onChange={this.onChangeHandler}  id="password" className="Afterlogin" name="password" required />
                                <i className={`fa ${isPasswordVisble ? 'fa-eye-slash' : 'fa-eye' } `} id="togglePassword" style={{ marginLeft : '-30px', cursor: 'pointer'}} onMouseDown={this.handleMouseDownPassword} ></i>
                            </div>
                        </div>
                        <br/>
                        <div className="">
                            <NavLink to='ChangePassword'><button type="submit" id="change_pass_button" className="btn btn-primary mr-2"> Change Password</button></NavLink>
                            <NavLink to='User'>  <button type="submit" id="logout_button" className="btn btn-primary ml-2"> Logout</button> </NavLink>
                        </div>
                        {/* </form> */}
                    </div>
                </div>

            </>
        )
    }
}
