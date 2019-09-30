import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_NOT_COMPLETED } from './actions/types';
import { setVisibilityFilter } from './actions/list';
import TodoList from './TodoList';

class VisibleTodoList extends Component {
  render() {
    return (
      <div>
        <TodoList
          remove={this.props.remove}
          list={this.props.list}
          edit={this.props.edit}
          toggleCompletion={this.props.toggleCompletion}
        />
        <h1>VisibleList</h1>
        <button onClick={() => this.props.onSetVisibilityFilter(SHOW_ALL)}>
          Show All
        </button>
        <button
          onClick={() => this.props.onSetVisibilityFilter(SHOW_COMPLETED)}
        >
          Show Completed
        </button>
        <button
          onClick={() => this.props.onSetVisibilityFilter(SHOW_NOT_COMPLETED)}
        >
          Show Uncompleted
        </button>
      </div>
    );
  }
}

//Custom reducer that changes value of list, depending on VISIBILITY_FILTER
const getVisibleTodos = (list, filter) => {
  // eslint-disable-next-line default-case
  switch (filter) {
    case SHOW_ALL:
      return list;

    case SHOW_COMPLETED:
      return list.filter(item => item.completed);

    case SHOW_NOT_COMPLETED:
      return list.filter(item => !item.completed);

    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => {
  return {
    //- Pass vis/ActionType as a prop and show user particular view depending
    // on the action type passed to it
    list: getVisibleTodos(state.list, state.vis),
    //- vis is visReducer which returns an action type
    vis: state.vis
  };
};

// Firing custom action Creator to change filter type & change view depending
// on filter type
const mapDispatchToProps = dispatch => {
  return {
    onSetVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);
