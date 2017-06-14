import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoItem from './todos_item';
import { completeTodo, deleteTodo, editTodo, filterTodo } from '../actions/index';

class TodoList extends Component {

  constructor(props) {
      super(props);
      this.renderTodo = this.renderTodo.bind(this);
  }

  renderTodo(singleTodo) {
    return (
      (this.props.filters != singleTodo.status) && (
        <TodoItem
          key={singleTodo.id}
          todo={singleTodo}
          completeTodo={this.props.completeTodo}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
        />
      )
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

function mapStateToProps({ todos, filters }){
  return { todos, filters };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ completeTodo, deleteTodo, editTodo, filterTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
