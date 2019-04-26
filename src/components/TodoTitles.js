import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class TodoTitles extends React.Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markCompleted={this.props.markCompleted} />  
      
      // Here 'this' refer to TodoTitles
      
    ));  
  }
}

TodoTitles.propTypes = {
  todos: PropTypes.array.isRequired
}





