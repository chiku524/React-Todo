import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import './components/Todo.css';

const todoList = [
  {
    task: 'Clean up garden',
    id: 1,
    complete: false
  },
  {
    task: 'Do groceries',
    id: 2,
    complete: true
  },
  {
    task: 'Fill up gas tank for vehicles',
    id: 3,
    complete: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoList: todoList
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      complete: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  }

  toggleTask = taskID => {
    console.log(taskID);

    this.setState({
      todoList: this.state.todoList.map(task => {
        if(taskID === task.id) {
          return {
            ...task, 
            complete: !task.complete
          };
        }
        return task;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(task => !task.complete)
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList todoList={this.state.todoList} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;