import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
// import validator from 'validator'

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            link:true,
            errors: {
                email: '',
                password: '',
                conf_pass: ''
            },
            users:[],
            login: {
                email: '',
                password: '',
                conf_pass: ''
            }
        }
    }


    ChangeHandler = (e) => {
        let name = e.target.name
        let errors = this.state.errors
        let { login } = this.state
        login[e.target.name] = e.target.value
        this.setState({
            login
        })
        // this.fieldValidion()
        const email_pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const email_result = email_pattern.test(login.email);

        const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/g;        
        const password_result = password_pattern.test(login.password);

        switch(name){
            case 'email': 
            errors.email =  email_result === false ? '*Please enter valid email-ID.' : ''
            break;

            case 'password': 
            errors.password =  password_result === false ? '*Please enter valid password ( at least 8 characters in length, one upper case,one lower case,one digit,one Special character).' : ''
            break;

            case 'conf_pass': 
            errors.conf_pass = login.password !== login.conf_pass ? '*Please Re-enter same password.' : ''
            break;
           
            default :
            break;
        }
        this.setState({
            errors
        })
    }
    onSubmitHandler = (e) => {
        // this.fieldValidion()
        e.preventDefault()
        
        let{ login,users,errors} = this.state;  

        if(login.email && login.password && login.conf_pass !== '' ){
            console.log('submited successfully');
            delete login['']
            console.log(login,'login');
           
            var check = false
            users.forEach((ele)=>{
                if(ele.email === login.email){
                    check = true
                }               
            })
            if(check ===  false){
                users.push(login)
                alert(`Users Add`,login);
            }
            else{
                alert(`Already Exist `,check);
             }           

                console.log(users,'users');

                this.setState({
                    users:users,
                    login: {
                        email: '',
                        password: '',
                        conf_pass: ''
                    }
                })
                

        }
        else{
            if(login.email === ''){

                errors.email = 'email canot be blank'
                this.setState({
                    errors
                })
            }
            if(login.password === ''){

                errors.password = 'password canot be blank'
                this.setState({
                    errors
                })
            }
            if(login.conf_pass === ''){

                errors.conf_pass = 'conf_pass canot be blank'
                this.setState({
                    errors
                })
            }
        }
        localStorage.setItem('users', JSON.stringify(users));
        
    }

    render() {

        const{email,password,conf_pass} = this.state.errors
        return (
            <>
                <div id="login-card" className="card">
                    <div className="card-body">
                        <h2 className="text-center">Signup form</h2>
                        <span className="text-center">abc@gmail.com</span>
                        <br />
                        <form onSubmit={this.onSubmitHandler} >
                            <div className="form-group">
                                <input type="email" value={this.state.login.email} onChange={this.ChangeHandler} autoComplete='off' className="form-control form_input" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <span className="error_color">{email} </span>

                            <div className="form-group">
                                <input type="text" value={this.state.login.password} onChange={this.ChangeHandler} autoComplete='off' className="form-control form_input" id="password" placeholder="Enter password" name="password" />
                            </div>
                            <span className="error_color">{password} </span>
                            <div className="form-group">
                                <input type="text" value={this.state.login.conf_pass} onChange={this.ChangeHandler} autoComplete='off' className="form-control form_input" id="password2" placeholder="Re_Enter password" name="conf_pass" />
                            </div>
                            <span className="error_color">{conf_pass} </span>

                            {/* { this.state.login.email && this.state.login.password && this.state.login.conf_pass === '' ? console.log('link disable'):console.log(' link enable')} */}


                                {/* <button type="submit" id="button" className="btn btn-primary deep-purple btn-block "> Submit</button> */}
                                <button type="submit" id="button" className="btn btn-primary deep-purple btn-block "><NavLink exact to='/Register' > Submit</NavLink></button>
                            <br/>
                            <div>
                                <span className="ask">already have an account?</span>
                                 <NavLink to='/User'>  Login</NavLink>
                            </div>
                            <br />
                            <br />
                            <div id="btn" className="text-center">
                                <button type="button" className="btn btn-primary btn-circle btn-sm"><i className="fa fa-facebook" /></button>
                                <button type="button" className="btn btn-danger btn-circle btn-sm"><i className="fa fa-google" /></button>
                                <button type="button" className="btn btn-info btn-circle btn-sm"><i className="fa fa-twitter" /></button>
                            </div>
                        </form>
                    </div>
                    <div>
                    </div>
                </div>

            </>
        )
    }
}
