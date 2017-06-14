import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.completeTodo = this.completeTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    completeTodo(event) {
        this.props.completeTodo(this.props.todo);
    }

    deleteTodo(event) {
        this.props.deleteTodo(this.props.todo);
    }

    editTodo(event) {
        this.props.editTodo(event.target.value, this.props.todo);
    }

    render() {
      let status = this.props.todo.status ? "complete" : "incomplete";
      let badge = "badge badge-" + status;

      return (
        <tr>
          <td>{this.props.todo.id}</td>
          <td
            onChange={this.editTodo}>
            <textarea defaultValue={this.props.todo.text}
              className="styled-textarea">
            </textarea>
          </td>
          <td><span
            onClick={this.completeTodo}
            className={badge}>{status}</span>
          </td>
          <td><span
            onClick={this.deleteTodo}
            className='badge badge-default'>Delete</span>
          </td>
        </tr>
        );
      }
  }

export default connect()(TodoItem);
