import React, {  Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index'

class TodosNew extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.term);
    this.setState({ term: '' });
  }

  render () {
    return(
      <div>
      <h2>Add A New Todo</h2>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="What else do you need to do?"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodosNew);
