import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterTodo } from '../actions/index';

class TodosFilter extends Component {

  constructor(props) {
      super(props);
      this.filterTodo = this.filterTodo.bind(this);
  }

  filterTodo(event) {
      this.props.filterTodo(this.props.filter);
  }

  render() {
    let status = this.props.filters ? "incomplete" : "complete";
    let badge = "badge badge-" + status;

    return (
      <div>
        <ol className="breadcrumb">
          <li>Filter Todos</li>
          <li> <span className={badge} onClick={this.filterTodo} >{status}</span> </li>
        </ol>
      </div>
    );
  }
}

function mapStateToProps({ filters }){
  return { filters };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosFilter);
