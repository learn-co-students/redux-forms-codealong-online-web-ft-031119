import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };
  //alternate way to handle Submit when no args are given & connect returns dispatch as a prop
  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Todo: </label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
    };
};

// alternate export statement with no arguments given
// export default connect()(CreateTodo)
export default connect(
    null,
    mapDispatchToProps
)(CreateTodo);
