import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TodoItem extends Component {
    constructor(props) {
          super(props);
          this.completeTodo = this.completeTodo.bind(this);
    }

    completeTodo(event) {
        this.props.completeTodo(this.props.todo);
    }

    render() {
      status = this.props.todo.status ? "complete" : "incomplete";
      let badge = "badge badge-" + status;

      return (
        <tr>
          <td>{this.props.todo.id}</td>
          <td>{this.props.todo.text}</td>
          <td><span
          onClick={this.completeTodo}
          className={badge}>{status}</span></td>
        </tr>
        );
      }
  }

export default connect()(TodoItem);
