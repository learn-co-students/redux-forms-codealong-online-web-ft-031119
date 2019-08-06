import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: '',
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit= {event => this.handleSubmit(event)}>
          <p>
            <label>
              add todo
            </label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addTodo: formData => dispatch({
      type: 'ADD_TODO' , payload: formData
    })
  }
}
export default connect(null, mapDispatchToProps)(CreateTodo);
