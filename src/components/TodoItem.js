import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
  constructor(props){
    super(props);
      this.getStyle = () => {
        return {
          background : '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.completed?
          'line-through' : 'none' 
        } 
      }
      
  } 

  render() {
    const {id, title} = this.props.todo;  
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}/>{''}  
          
          {/* Here，in the onChange，the first 'this' refer to TodoItem */}
          
          {title}
        </p>
      </div>
    )
  }
}



TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

