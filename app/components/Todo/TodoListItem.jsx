import React, { Component } from 'react'

class TodoListItem extends Component{

    constructor(){
        super()
        this.state = {
            isEditing : false
        }
    }


    renderTaskSection(){
        const { task, isCompleted } = this.props

        const taskStyle = {
            color : isCompleted ? 'green' : 'red',
            cursor : 'pointer'
        }

        return (
            <td style = { taskStyle }> 
                { task } 
            </td>
        )
    }
    
    render(){
        return(
            <tr>
                { this.renderTaskSection() }
                <td><button>Save</button></td>
            </tr>
        )
    }

}

export default TodoListItem