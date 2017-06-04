import React, { Component } from 'react';
// import logo from './logo.svg';
import 'normalize.css';
import './reset.css';
import './App.css';

import TodoInput from './TodoInput'
import TodoItems from './TodoItems'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: "what is it?",
      todoList: [
        {id:1, title:"items1"},
        {id:2, title:"items2"},
        {id:3, title:"items3"}
      ]
    }
  }

  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
        <li>
          <TodoItems todo={item} />
        </li>
      )
    })

    return (
      <div className="App">
        <h1>My TodoList</h1>
        <div className="inputWarpper">
          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }

  addTodo(){
    console.log("I need to add a todo item");
  }
}

export default App;
