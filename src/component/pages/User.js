import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state={
            checkLink:false,
            registerUsers:[],
            errors: {
                email: '',
                password: ''
            },
            login:{
                email:'',
                password:''
            }
        }
        console.log(this.state.registerUsers,'registerUsers');
    }

    ChangeHandler=(e)=>{
        let{ login } = this.state;
        let name = e.target.name
        let errors = this.state.errors
        
        login[e.target.name] = e.target.value
        this.setState({
            login
        })

        // field validation

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

    onSubmitHandler=(e)=>{

        e.preventDefault()
        let{ login,registerUsers,errors} = this.state;    

        registerUsers = JSON.parse(localStorage.getItem('users'))

        console.log(registerUsers,'registerUsers');

        console.log(login,'login input');

        if(login.email && login.password !== ''){

// *********************   test  **************************

                let {checkLink } = this.state;
                registerUsers.find(e => e.email == login.email && e.password == login.password ? checkLink = true : checkLink = false );

                console.log(checkLink);

                // checkLink == true ? console.log('abhay its a valid user') : console.log('abhay its a not valid user');  // this is working here properly bt not working below at line number 145


// ************************  test   ****************************************

   //     registerUsers.push(login)
            console.log(registerUsers,'registerUsers');
            this.setState({
                registerUsers:registerUsers,
                login:{
                    email:e.target.reset(),     // this suppose reset the input field
                    password:e.target.reset()
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
    }

    render() {
        let {checkLink } = this.state;
        return (
            <>
            <div id="login-card" className="card">
                <div className="card-body">
                    <h2 className="text-center">Login</h2>  
                    <br />
                    <form onSubmit={this.onSubmitHandler} noValidate>
                            <div className="form-group">
                                <input type="text" value={this.state.login.email} onChange={this.ChangeHandler} autoComplete='off' className="form-control form_input" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <span className="error_color">{this.state.errors.email} </span>

                            <div className="form-group">
                                 <input type="text" value={this.state.login.password} onChange={this.ChangeHandler} autoComplete='off' className="form-control form_input" id="password" placeholder="Enter password" name="password" />
                            </div>
                            <span className="error_color">{this.state.errors.password} </span>

                         {/*   issue area  want to display NavLink with path if condtion satisfied else regular btn */}




                        {checkLink == true ? console.log('abhay its a valid user') : console.log('abhay its a not valid user')}

                        { checkLink === true ?<NavLink to='AfterLogin'><button type="submit" id="button" className="btn btn-primary deep-purple btn-block ">Submit2</button></NavLink> : <button type="submit" id="button" className="btn btn-primary deep-purple btn-block ">Submit</button> }

                        {/* { this.state.checkLink === true ? <button type="submit" id="button" className="btn btn-primary deep-purple btn-block ">Submit</button> : <NavLink to='AfterLogin'><button type="submit" id="button" className="btn btn-primary deep-purple btn-block ">Submit2</button></NavLink> } */}
                        



                        {/*   issue area  */}
                        <br/>
                        <div>
                            <span className="ask">Don't have account?</span>
                            <NavLink to='/Register'><button className="btn signup">sign up</button></NavLink>
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





