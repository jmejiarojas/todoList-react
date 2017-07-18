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
                <TodoForm 
                    todos = {this.state.todos}
                    createTask = { this.createTask.bind(this) }
                />
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }

    //Estos son metodos propios que vamos a utilizar
    createTask(task){
        this.state.todos.push({
            task,
            isCompleted: false
        })
        this.setState({
            todos: this.state.todos
        })
    }

    toggleTask(task){
        
    }

    saveTask(task){

    }

    deleteTask(task){

    }

}

export default App