import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoItem from '../components/todo_item';
import { store } from '../store';
import PropTypes from 'prop-types';
import { completeTodo, deleteTodo, editTodo, filterTodo } from '../actions/index';

class TodoList extends Component {

  static propTypes = {
    completeTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func
  };

  constructor(props) {
      super(props);
      this.handleEditTodo = this.handleEditTodo.bind(this);
  }

  handleEditTodo(event, todo){
    this.props.editTodo(event.target.value, todo);
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
          { this.props.todos.filter((todo) => {
            return todo.status != store.getState().filters}).map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleEditTodo={(event) => this.handleEditTodo(event, todo)}
                  deleteTodo={this.props.deleteTodo}
                  editTodo={this.props.editTodo}
                />
              );
            })
          }
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
