import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

let login_user
let register_users 


export default class ChangePassword extends Component {
    constructor(props){
        super(props)
        this.state ={
            // checkLink:false,
            change_user_password :{
                email:'',
                password:'',
                conf_pass:'',
            },
            errors: {
                email: '',
                password: '',
                conf_pass: ''
            },         
        }

        login_user= JSON.parse(localStorage.getItem('login'))
        register_users = JSON.parse(localStorage.getItem('users'))

        console.log(register_users,'register_users');

        console.log(login_user,'login_user');
    }

    

    onChangeHandler=(e)=>{
        let name = e.target.name
        let errors = this.state.errors
        let { change_user_password } = this.state 
        change_user_password.password = e.target.value
        this.setState({
            change_user_password
        })
        // field validation

        const email_pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const email_result = email_pattern.test(change_user_password.email);

        const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/g;        
        const password_result = password_pattern.test(change_user_password.password);

        switch(name){
            case 'email': 
            errors.email =  email_result === false ? '*Please enter valid email-ID.' : ''
            break;

            case 'password': 
            errors.password =  password_result === false ? '*Please enter valid password ( at least 8 characters in length, one upper case,one lower case,one digit,one Special character).' : ''
            break;

            case 'conf_pass': 
            errors.conf_pass = change_user_password.password !== change_user_password.conf_pass ? '*Please Re-enter same password.' : ''
            break;
           
            default :
            break;
        }
        this.setState({
            errors 
        })
    }
//   => i learn how to modify data in localstorage in react 

    saveChangePassword=(e)=>{

        e.preventDefault();
      
        let { change_user_password ,errors,checkLink} = this.state 

        if(change_user_password.email && change_user_password.password !== ''){


            change_user_password.conf_pass = change_user_password.password
            // checkLink=true

            this.setState({
                // checkLink,
                change_user_password
            })
            console.log(checkLink,'checkLink');

            console.log(change_user_password,'password input');
            const new_change_pass = register_users.findIndex(item => item.email === login_user.email);
            register_users[new_change_pass] = change_user_password;


            // modifying old password with new password

            // prop = 'password';
            // login_user[prop] = change_user_password.password;

            localStorage.setItem('login', JSON.stringify(change_user_password));
            localStorage.setItem('users',JSON.stringify(register_users))
            console.log(register_users);
            this.props.history.push('/AfterLogin')
    


        }        
        else{
            if(change_user_password.email === ''){

                errors.email = 'email canot be blank'
                this.setState({
                    errors
                })
            }
            if(change_user_password.password === ''){
    
                errors.password = 'password canot be blank'
                this.setState({
                    errors
                })
            }
            if(change_user_password.conf_pass === ''){
    
                errors.conf_pass = 'conf_pass canot be blank'
                this.setState({
                    errors
                })
            }
        }
    }

    componentDidMount(){
    let { change_user_password } = this.state 
    change_user_password.email = login_user.email 
        this.setState({
            change_user_password
        })

    }
    render() {
        return (
            <>
               <div className="mainDiv">
                    <div className="cardStyle">
                        <form method="post" name="signupForm" id="signupForm" onSubmit={this.saveChangePassword}>
                        <h2 className="formTitle">
                            Change Password
                        </h2>

                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="confirmPassword">Email</label>
                            <input value={this.state.change_user_password.email} onChange={this.onChangeHandler} type="text" id="Email" name="Email" />
                            <span className="error_color">{this.state.errors.email} </span>
                        </div>
                        <div className="inputDiv">
                            <label className="inputLabel" htmlFor="password">New Password</label>
                            <input value={this.state.change_user_password.password} onChange={this.onChangeHandler} type="text" id="password" name="password" />
                            <span className="error_color">{this.state.errors.password} </span>
                        </div>
                        <br/>
                        <div className="">
                           <button type="submit" id="change_pass_button" className="btn btn-primary mr-2"> Save Password</button> 
                           <NavLink to='/AfterLogin'>  <button type="submit" id="change_pass_button" className="btn btn-primary ml-2"> Cancle</button> </NavLink>
                        </div>
                        <br/>
                            <NavLink to='/User'>  <button type="submit" id="change_pass_button" className="btn btn-danger ml-2"> Logout</button> </NavLink>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}
