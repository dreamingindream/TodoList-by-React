import React, { Component } from 'react';
// import logo from './logo.svg';
import 'normalize.css';
import './reset.css';
import './App.css';

import TodoInput from './TodoInput'
import TodoItems from './TodoItems'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: "",
      todoList: []
    }
  }

  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li key={index}>
          <TodoItems todo={item} 
                     onToggle={this.toggle.bind(this)}
                     onDelete={this.delete.bind(this)} />
        </li>
      )
    })
    console.log(todos);

    return (
      <div className="App">
        <h1>My TodoList</h1>
        <div className="inputWarpper">
          <TodoInput
            content={this.state.newTodo}
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)}
          />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }

  toggle(e, todo){
    todo.status = (todo.status === 'completed' ? '' : 'completed')
    this.setState(this.state)
  }

  delete(event, todo){
    todo.deleted = true
    this.setState(this.state)
  }

  changeTitle(event) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }

  addTodo(event) {
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: "",
      todoList: this.state.todoList
    })
  }

}

let id = 0;
function idMaker() {
  id += 1;
  return id;
}

export default App;
