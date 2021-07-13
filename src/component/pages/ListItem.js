import React, { Component } from 'react'

export default class ListItem extends Component {
    
    render() {
        return (
            <div>
                {
                this.props.TodoTask && this.props.TodoTask.map(({id,title,completed})=>{
                    return (
                    // <div className="taskItem" key={Date.now()}> 
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
                                <button className="btn-danger rounded w-75" onClick={()=>{
                                    this.props.handleDelete(id)
                                }}>Delete</button>
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
