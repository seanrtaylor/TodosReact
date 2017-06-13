import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoItem from './todos_item';
import { completeTodo } from '../actions/index';

class TodoList extends Component {

  constructor(props) {
      super(props);
      this.renderTodo = this.renderTodo.bind(this);
  }

  renderTodo(singleTodo) {
    return (
      <TodoItem
        key={singleTodo.id}
        todo={singleTodo}
        completeTodo={this.props.completeTodo}
      />
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> Todo Number </th>
            <th> Description </th>
            <th> Completed </th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map(this.renderTodo)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ todos }){
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ completeTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
