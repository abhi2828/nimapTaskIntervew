import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state={
            link:true,
            users:[],
            login:{
                email:'',
                password:''
            }
        }
    }

    onChangeHandler=(e)=>{
        let{ login } = this.state;
        login[e.target.name] = e.target.value
        this.setState({
            login
        })
    }

    onSubmitHandler=(e)=>{
        e.preventDefault()
        let{ login,users} = this.state;    
        if(login.email && login.password !== ''){
            // console.log('submited successfully');

// *********************   test  **************************

                var check ='Not found';
                users.forEach(ele => {
                if(ele.email===login.email)
                {
                    check = ele
                }
                })
                if(check==='Not found'){
                    users.push(login);
                // console.log(`Users Add`,login);
                // console.log(`logged users : `,users);
                }else{
                alert(`Already Exist `,check);

                }

// ************************  test   ****************************************

        //     users.push(login)
            console.log(users,'users');
            this.setState({
                users:users,
                login:{
                    email:e.target.reset(),     // this suppose reset the input field
                    password:e.target.reset()
                }
            })
        }
        else{
            console.log('Please Enter Valid login credential');
        }
    }

    render() {
        return (
            <>
            <div id="login-card" className="card">
                <div className="card-body">
                    <h2 className="text-center">Login</h2>  
                    <br />
                    <form onSubmit={this.onSubmitHandler} noValidate>
                        <div className="form-group">
                            <input type="email" value={this.state.login.Email} onChange={this.onChangeHandler} className="form-control form_input" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="form-group">
                            <input type="password" value={this.state.login.Password} onChange={this.onChangeHandler} className="form-control form_input" id="password" placeholder="Enter password" name="password" />
                        </div>
                        <button type="submit" id="button" className="btn btn-primary deep-purple btn-block ">Submit</button>
                        <br/>
                        {/* <div className="form__row">
                            <NavLink to='' className="form__retrieve-pass">Forgot Password?</NavLink>
                        </div> */}
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





