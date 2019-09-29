import React, { Component } from 'react';

export default class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ''
    };
  }

  handleChange = e => {
    console.log(this.state.taskName);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, task) => {
    e.preventDefault();

    //dispatch ADD_TODO action
    this.props.add(task);

    //clearform
    this.setState({
      taskName: ''
    });
  };

  render() {
    const { parent, inputMargin } = styles;
    return (
      <form style={parent}>
        <input
          autoComplete="off"
          type="text"
          placeholder="Enter a Task"
          name="taskName"
          value={this.state.taskName}
          onChange={this.handleChange}
          style={inputMargin}
        />
        <button onClick={e => this.handleSubmit(e, this.state.taskName)}>
          Add New Todo
        </button>
      </form>
    );
  }
}

const styles = {
  parent: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputMargin: {
    marginBottom: '0.5em'
  }
};
