import React, { Component } from 'react'

class TodoListHeader extends Component {

    render(){
        return (
             <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
        )
    }
}

export default TodoListHeader