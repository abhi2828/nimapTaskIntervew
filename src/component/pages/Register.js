import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom';
// import validator from 'validator'

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkLink:false,
            errors: {
                email: '',
                password: '',
                conf_pass: ''
            },
            temp:[],
            users:[],
            register: {
                email: '',
                password: '',
                conf_pass: ''
            }
        }
    }


    ChangeHandler = (e) => {
        let name = e.target.name
        let errors = this.state.errors
        let { register } = this.state
        register[e.target.name] = e.target.value
        this.setState({
            register
        })
        
        // field validation

        const email_pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const email_result = email_pattern.test(register.email);

        const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/g;        
        const password_result = password_pattern.test(register.password);

        switch(name){
            case 'email': 
            errors.email =  email_result === false ? '*Please enter valid email-ID.' : ''
            break;

            case 'password': 
            errors.password =  password_result === false ? '*Please enter valid password ( at least 8 characters in length, one upper case,one lower case,one digit,one Special character).' : ''
            break;

            case 'conf_pass': 
            errors.conf_pass = register.password !== register.conf_pass ? '*Please Re-enter same password.' : ''
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
        let localStorageData= JSON.parse(localStorage.getItem('users'))

        console.log(localStorageData,'localStorageData');
        
        let{ register,users,errors,checkLink} = this.state;  

        

        if(register.email && register.password && register.conf_pass !== '' ){
            console.log('submited successfully');
            // delete register['']
            console.log(register,'register');
           
            var check = 'not found'
            users.find((ele)=>{
                if(ele.email === register.email){
                    check = 'found'
                }               
            })
            users.push(register)

            // console.log(users,'users');
            if( check ===  'not found' && errors.email === '' && errors.password === '' && errors.conf_pass === ''){

                users.push(register)
                
                checkLink = true
                this.setState({
                    checkLink 
                    // window.location.href='/User'
                })

                // localStorageData = localStorageData.push(JSON.stringify(users))
                localStorage.setItem('users', JSON.stringify(users));
                // this.props.history.push('/User')
                alert(`Users Add`);
                // console.log(localStorageData,'localStorageData2');
            }
            else{
                alert(`Already Exist `,check);
             }           
            //  console.log(users,check);
            //     console.log(users,'users');           

        }
        else{
            if(register.email === ''){

                errors.email = 'email canot be blank'
                this.setState({
                    errors
                })
            }
            if(register.password === ''){

                errors.password = 'password canot be blank'
                this.setState({
                    errors
                })
            }
            if(register.conf_pass === ''){

                errors.conf_pass = 'conf_pass canot be blank'
                this.setState({
                    errors
                })
            }
        }

        this.setState({
                users:users,
                register: {
                    email: '',
                    password: '',
                    conf_pass: ''
                }
            })   
  
        console.log(users,'users');
    }

    render() {
        if(this.state.checkLink === true ){
            // return <Redirect to='/User' />
        }

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
                                <input type="text" value={this.state.register.email} onChange={this.ChangeHandler} autoComplete='off' className="form-control form_input" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <span className="error_color">{email} </span>

                            <div className="form-group">
                                <input type="text" value={this.state.register.password} onChange={this.ChangeHandler} autoComplete='off' className="form-control form_input" id="password" placeholder="Enter password" name="password" />
                            </div>
                            <span className="error_color">{password} </span>
                            <div className="form-group">
                                <input type="text" value={this.state.register.conf_pass} onChange={this.ChangeHandler} autoComplete='off' className="form-control form_input" id="password2" placeholder="Re_Enter password" name="conf_pass" />
                            </div>
                            <span className="error_color">{conf_pass} </span>

                            <button type="submit" id="button" className="btn btn-primary deep-purple btn-block "> Submit</button>
                            <br/>
                            <div>
                                <span className="ask">already have an account?</span>
                                 <NavLink to='/User'>  login</NavLink>
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
