import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    console.log('props', this.props);
    return (
      <ul>
        {this.props.list.map(item => (
          // console.log('item.id', item.id),
          <TodoItem
            remove={this.props.remove}
            key={item.id}
            todoId={item.id}
            task={item.task}
            edit={this.props.edit}
            completedStatus={item.completed}
            toggleCompletion={this.props.toggleCompletion}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
