import axios from 'axios';
import React, { Component } from 'react'
import ListItem from './ListItem';
import './TaskList.css'


export default class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: [],
            Form: {
                completed: false,
                id: '',
                title: '',
                userId: ''
            }
        }
    }
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")
        data.reverse();
        this.setState({
            task: data
        })
        console.log('abhay', this.state.task);
    }


    onSubmitHandler = (e) => {
        e.preventDefault()
        let {task,Form} = this.state
        if(Form.id && Form.title && Form.userId !== ''){
            console.log('all done');


// *********************   test  **************************

                var check ='Not found';
                task.forEach(ele => {
                if(ele.title === Form.title & ele.id === Form.id)
                {
                    check = ele
                }
                })
                // console.log(check,'check');
                if(check==='Not found'){
                    task.unshift(
                        this.state.Form
                    )
                console.log(`task Add`,Form);
                console.log(`logged task : `,task);
                }else{
                console.log(`Already Exist `,check);

                }

// ************************  test   ****************************************

            
            this.setState({
                task: task,
                Form :  {
                    completed: false,
                    id: '',
                    title: '',
                    userId: ''
                }
            })
        }
        else{
            console.log('not done',Form);
        }
        // console.log('Form', this.state.Form);
        
        
    }

    onChangeHandler = (e) => {
        
        let { Form } = this.state
        Form[e.target.name] = e.target.value
        this.setState({
            Form 
        })

    }

    onCheckBoxChangeHandler =(e)=>{
        let { Form } = this.state
          Form.completed = e.target.checked
          this.setState({
          Form
          })
        // console.log(Form.completed,'task');
    }

    handleDelete = (e) => {
        const newList = this.state.task.filter(item => item.id !== e);
        this.setState({ task: newList });
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmitHandler}>
                    <input type='number' value={this.state.Form.userId} className="w-25" onChange={this.onChangeHandler} placeholder='userId' name='userId' />
                    <input type='number' value={this.state.Form.id} className="w-25" onChange={this.onChangeHandler} placeholder='Id' name='id' />
                    <input type='text' value={this.state.Form.title} className="w-25" onChange={this.onChangeHandler} placeholder='title' name='title' />
                    <span className="d-flex mx-2">
                      <input type='checkbox' value={this.state.Form.completed} className="" onChange={this.onCheckBoxChangeHandler} placeholder='completed' name='completed' />
                      <label className="form-check-label" name="all" id="all">Task completed</label>
                    </span> 
                    <button className="btn-primary rounded">
                        ADD
                    </button>
                </form>
                <ListItem TodoTask={this.state.task} handleDelete={this.handleDelete} />
            </div>
        )
    }
}
