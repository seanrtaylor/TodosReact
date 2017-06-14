import React, { Component, PropTypes } from 'react';
import '../stylesheets/main.scss';
import TodosNew from '../containers/todos_new'
import TodoList from '../containers/todos_list'
import TodoItem from '../containers/todos_item'
import TodosFilter from '../containers/todos_filter'


class App extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
        <TodosNew />
        <TodosFilter />
        <TodoList />
      </div>
    );
  }
}

export default App;
