import React from 'react'

const ListItem = ({id,title,checked}) => {
    console.log({id,title,checked});
    return (
        <div>
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
                                <span>{`${checked}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <button className="btn-danger rounded w-75" onClick={this.RemoveItem(id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem
