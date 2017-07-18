import React, { Component } from 'react'

import { todos }  from '../todo.json'
import TodoList from './Todo/TodoList'
import TodoForm from './Todo/TodoForm'

class App extends Component{
    constructor(){
        super()
        this.state = {
            todos
        }
    }

    render(){
        console.log(this.state.todos)
        return (
            
            <div>
                <h1>Todo List con React</h1>
                <TodoForm todos = {this.state.todos}/>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }

    //Estos son metodos propios que vamos a utilizar
    createTask(task){

    }

    toggleTask(task){
        
    }

    saveTask(task){

    }

    deleteTask(task){

    }

}

export default App