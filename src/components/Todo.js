import React from 'react';
import TodoTitles from './TodoTitles';


export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Take out the trash',
          completed: false  
        },
        {
          id: 2,
          title: 'Eat Dinner',
          completed: false    
        },
        {
          id: 3,
          title: 'Open Computer',
          completed: false    
        }  
      ]  
    } 
    this.markCompleted = this.markCompleted.bind(this);
  }
     
  markCompleted(capturedId) {
    const {todos} = this.state;
    const updatedTodos = todos.map((todo)=>{
      
      if (capturedId === todo.id) {
        todo.completed = !todo.completed
      }
      return todo; 
    });

    this.setState({
      todos: updatedTodos,
    });
 
  }

  render() {
    const {todos} = this.state;  
    console.table(todos); //show status in console
    
    return (
              
      <div className='section'>
        <TodoTitles todos={todos} markCompleted={this.markCompleted}/>    {/* Here 'this' refer to class object Todo */}

       
        
      </div>
      
    );
  }
}



//markCompleted

//previous 1 (no)
// markCompleted(capturedId) {
//   const {todos} = this.state;
//   const updatedTodos = todos.map(()=>{
//     const completedTodo = todos.find(({id})=> capturedId === id);
//     completedTodo.completed = !todos.completed;
//     completedTodo.title = !!todos.title;
//     completedTodo.id = !!todos.id;
//     return completedTodo;
//   });

//   this.setState({
//     todos: updatedTodos,
//   });
// }

  //previous 2 (no)  --- 不熟悉callback function；没有理解map传进来的todo参数的意义；不够了解ES6 scope
   //const {todos} = this.state;
    // const updatedTodos = todos.map((todo)=>{
      
    //   if (capturedId === todo.id) {    //这里的if() {...}  也是scope
    //    const completedTodo = todo;
    //    completedTodo.completed = !completedTodo.completed;
    //   }
    //   return completedTodo;   // completedTodo undefined， 在作用域外
    // });

    // this.setState({
    //   todos: updatedTodos,
    // });


    //previous 3 (yes!)
    //const {todos} = this.state;
    // const updatedTodos = todos.map((todo)=>{
      
    //   if (capturedId === todo.id) {
    //     todo.completed = !todo.completed
    //   }
    //   return todo; 
    // });

    // this.setState({
    //   todos: updatedTodos,
    // });