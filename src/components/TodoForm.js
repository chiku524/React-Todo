import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            task : ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitTask = e => {
        e.preventDefault();
        this.setState({ task: '' });
        this.props.addTask(e, this.state.task);
    }

    render() {
        return(
            <form onSubmit={this.submitTask}>
                <input type='text' value={this.state.task} name='task' onChange={this.handleChange} />
                <button className='addButton'>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;