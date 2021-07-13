import React, { Component } from 'react'

export default class SelectBox extends Component {
    render() {
        return (
            <>
                <span className="d-flex mx-2">
                    <input type='checkbox' value={this.state.Form.completed} className="" onChange={this.onChangeHandler} placeholder='completed' name='completed' />
                    <label className="form-check-label" name="all" id="all">Task completed</label>
                </span> 
            </>
        )
    }
}
