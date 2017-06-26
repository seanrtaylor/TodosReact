import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
      let status = this.props.todo.status ? "complete" : "incomplete";
      let badge = "badge badge-" + status;

      return (
        <tr>
          <td>{this.props.todo.id}</td>
          <td>
            <textarea onChange={this.props.handleEditTodo} defaultValue={this.props.todo.text}
              className="styled-textarea">
            </textarea>
          </td>
          <td>
            <span
            onClick={this.props.handleCompleteTodo}
            className={badge}>
            {status}
            </span>
          </td>
          <td>
            <span
            onClick={ this.props.handleDeleteTodo }
            className='badge badge-default'>
            Delete
            </span>
          </td>
        </tr>
        );
      }
  }
