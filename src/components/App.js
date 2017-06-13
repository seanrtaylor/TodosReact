import React, { Component, PropTypes } from 'react';
import '../stylesheets/main.scss';
import TodosNew from '../containers/todos_new'
import TodoList from '../containers/todos_list'
import TodoItem from '../containers/todos_item'


class App extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
        <TodosNew />
        <TodoList />
      </div>
    );
  }
}

export default App;
