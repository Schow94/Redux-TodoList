import React, { Component } from 'react';

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: this.props.task
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, id, updatedTask, completedStatus) => {
    e.preventDefault();
    // console.log('FROM EDIT FORM', id, updatedTask);
    this.props.edit(id, updatedTask, completedStatus);
    //Close form after Submitting Revised TodoItem
    this.props.toggleForm();
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="newTask"
          autoComplete="off"
          onChange={this.handleChange}
          value={this.state.newTask}
        />
        <button
          onClick={e =>
            this.handleSubmit(
              e,
              this.props.todoId,
              this.state.newTask,
              this.props.completedStatus
            )
          }
        >
          Save Change
        </button>
      </form>
    );
  }
}
