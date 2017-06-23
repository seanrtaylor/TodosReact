import React, { Component, PropTypes } from 'react';
import '../stylesheets/main.scss';
import TodoNew from '../containers/todo_new'
import TodoList from '../containers/todo_list'
import TodoItem from '../components/todo_item'
import TodoFilter from '../containers/todo_filter'


class App extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
        <TodoNew />
        <TodoFilter />
        <TodoList />
      </div>
    );
  }
}

export default App;
