import React, { Component } from 'react';
import EditForm from './EditForm';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditFormOn: false
    };
  }

  toggleEditForm = () => {
    this.setState({
      isEditFormOn: !this.state.isEditFormOn
    });
  };

  // Able to select item based on id
  handleRemove = x => {
    this.props.remove(x);
  };

  handleEdit = (id, newTask) => {
    this.props.edit(id, newTask);
  };

  handleFinished = (id, task, completionStatus) => {
    this.props.toggleCompletion(id, task, completionStatus);
  };

  render() {
    const { todoItem, button, completed } = styles;

    return (
      <li style={todoItem}>
        {this.state.isEditFormOn ? (
          <EditForm
            task={this.props.task}
            todoId={this.props.todoId}
            edit={this.props.edit}
            toggleForm={this.toggleEditForm}
            completedStatus={this.props.completedStatus}
          />
        ) : (
          <strong style={this.props.completedStatus ? completed : null}>
            {this.props.task}
          </strong>
        )}
        <span>
          {this.state.isEditFormOn ? null : (
            <>
              <button
                style={button}
                onClick={() =>
                  this.handleFinished(
                    this.props.todoId,
                    this.props.task,
                    this.props.completedStatus
                  )
                }
              >
                Completed
              </button>

              <button
                onClick={() => this.handleRemove(this.props.todoId)}
                style={button}
              >
                Delete
              </button>
            </>
          )}

          <button
            onClick={() => this.toggleEditForm(this.props.todoId)}
            style={button}
          >
            {this.state.isEditFormOn ? `Go Back` : `Edit`}
          </button>
        </span>
      </li>
    );
  }
}

const styles = {
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1em'
  },
  button: {
    marginLeft: '1em'
  },
  completed: {
    textDecoration: 'line-through'
  }
};
