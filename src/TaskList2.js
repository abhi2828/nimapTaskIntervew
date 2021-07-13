import React, { Component } from 'react'
import './component/pages/TaskList.css'

let task=[ ]
let TodoTask=[ ]

export default class TaskList extends Component {    
    constructor(props){
        super(props);
        this.state={
            "userId": 0,
            "id": 0,
            "title":'',
            "completed": false
          }
        task = [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              }
        ]
        TodoTask=[...task]
        console.log(TodoTask,'task');
    }
    
    onSubmitHandler=(e)=>{
        e.preventDefault()
        if(this.state.title !== ''){
            console.log(`all done`);
               TodoTask=[...task,this.state]
			   task.push(this.state)
        }
        else{
            console.log(`401`);
        }
               console.log(this.state,'data');
			
			   task=[...new Set(task)]			   
			   console.log(task,'task');
			   TodoTask=[...new Set(task)]               
            //    console.log(TodoTask,'task');
			   this.setState({
				"userId": 0,
                "id": 0,
                "title":'',
                "completed": false
			  })
    }

    onChangeHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
		
     }
    RemoveItem=(id)=>{
        console.log(id,'deleted');
        
        // const updatedList = TodoTask.filter(item => item.id !== id);

        //update state
        // this.setState({ list: updatedList });
    }
    render() {
        return (
            <div>
                 <form className="form" onSubmit={this.onSubmitHandler}>
                    <input type='number' value={this.state.userId} className="w-25" onChange={this.onChangeHandler}  placeholder='userId' name='userId' />
                    <input type='number' value={this.state.id} className="w-25" onChange={this.onChangeHandler} placeholder='Id' name='id'/>
                    <input type='text' value={this.state.title} className="w-25" onChange={this.onChangeHandler} placeholder='title' name='title' />
                    <input type='text' value={this.state.completed} className="w-25" onChange={this.onChangeHandler} placeholder='completed' name='completed' />
                    <button className="btn-primary rounded">
                        ADD
                    </button>
                </form>   
				          
                {
                    TodoTask && TodoTask.map(({id,title,completed})=>{
                     return (
                        <div className="taskItem" key={id}> 
                            <div className="row">
                                <div className="col-9">
                                    <div className="row">
                                        <div className="col-2">
                                            <span>{id} </span>
                                        </div>
                                        <div className="col-8">
                                        {title}
                                        </div>
                                        <div className="col-2">
                                            <span>{`${completed}`}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <button className="btn-danger rounded w-75" onClick={this.RemoveItem}>Delete</button>
                                </div>
                            </div>
                        </div>
                     )
                    })
                }
            </div>
        )
    }
}
