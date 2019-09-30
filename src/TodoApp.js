import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addTodo,
  removeTodo,
  editTodo,
  toggleCompletion
} from './actions/list';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED } from './actions/types';

import AddTodoForm from './AddTodoForm';
import VisibleTodoList from './VisibleTodoList';

class TodoApp extends Component {
  render() {
    const { container } = styles;

    return (
      <div style={container}>
        <h1>Redux TodoList</h1>
        <AddTodoForm add={this.props.onAddTodo} />
        <VisibleTodoList
          remove={this.props.onRemoveTodo}
          edit={this.props.onEditTodo}
          toggleCompletion={this.props.onComplete}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: taskName => dispatch(addTodo(taskName)),
    onRemoveTodo: id => dispatch(removeTodo(id)),
    onEditTodo: (id, updatedTask, completedStatus) =>
      dispatch(editTodo(id, updatedTask, completedStatus)),
    onComplete: (id, task, completedStatus) =>
      dispatch(toggleCompletion(id, task, completedStatus))
  };
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default connect(
  null,
  mapDispatchToProps
)(TodoApp);
