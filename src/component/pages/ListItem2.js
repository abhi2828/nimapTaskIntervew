import React from 'react'

const ListItem2 = (props) => {
    const RemoveItem=(e)=>{
        console.log(e);
    }
    return (
        <div>
            {
                props.TodoTask && props.TodoTask.map(({id,title,completed})=>{
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
                                <button className="btn-danger rounded w-75" onClick={RemoveItem}>Delete</button>
                            </div>
                        </div>
                    </div>
                     )
                    })
                } 
        </div>
    )
}

export default ListItem2
