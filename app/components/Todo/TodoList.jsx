import React, { Component } from 'react'
import _ from 'lodash' 

import TodoListHeader from './TodoListHeader'
import TodoListItem from './TodoListItem'


class TodoList extends Component{

    constructor(){
        super()
    }

    renderItems(){
        return _.map(this.props.todos, (todo, index)=> {
            return (
                <TodoListItem key={index} {...todo}/> //Paso todo el objeto entero que esta siendo iterado
            ) 
        })
    }

    render(){
        return(
            <table>
                <TodoListHeader/>
                <tbody>
                    { this.renderItems() }
                </tbody>
            </table>
        )
    }
}

export default TodoList