import React, {Component} from 'react';
import './TodoItems.css'

export default class TodoItems extends Component {
  render(){
    return (
      <div className="TodoItems">
        <input type="checkbox"
               className="checkbox"
               checked={this.props.todo.status === 'completed'}
               onChange={this.toggle.bind(this)} />
        <span className="title">{this.props.todo.title}</span>
        <button className="delete" onClick={this.delete.bind(this)} >Delete</button>
      </div>
    )
  }

  toggle(e){
    this.props.onToggle(e, this.props.todo)
  }

  delete(e){
    this.props.onDelete(e, this.props.todo)
  }
}