import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {
  addTodo,
  removeTodo,
  editTodo,
  toggleCompletion
} from './actions/list';

class TodoApp extends Component {
  render() {
    const { container } = styles;

    return (
      <div style={container}>
        <h1>Redux TodoList</h1>
        <AddTodoForm add={this.props.onAddTodo} />
        <TodoList
          remove={this.props.onRemoveTodo}
          list={this.props.list}
          edit={this.props.onEditTodo}
          toggleCompletion={this.props.onComplete}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    visFilter: state.visFilter
  };
};

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
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
