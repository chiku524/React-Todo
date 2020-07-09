import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props);
    return (
        <div className='todoList'>
            {props.todoList.map(task => (
                <Todo key={task.id} toggleTask={props.toggleTask} task={task} />
            ))}
            <button className='clearButton' onClick={props.clearCompleted}>Clear Completed Tasks</button>
        </div>
    )
}

export default TodoList;