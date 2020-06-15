import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      tasks: [],
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.handleTaskToggle = this.handleTaskToggle.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
  }

  addNewTask(taskName) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          name: taskName,
          complete: false,
        },
      ],
    });
  }

  handleTaskToggle(indexOfTaskToToggle) {
    const newTasks = this.state.tasks.map((task, currentIndex) => {
      if (currentIndex === indexOfTaskToToggle) {
        return {
          ...task,
          complete: !task.complete,
        };
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  }

  handleTaskDelete(indexOfTaskToDelete) {
    const newTasks = this.state.tasks.filter((task, currentIndex) => {
      if (currentIndex === indexOfTaskToDelete) {
        return false;
      }
      return true;
    });
    this.setState({ tasks: newTasks });
  }

  render() {
    return (
      <div>
      <div className="App-header">
          <h1>TaskSpace</h1>
        </div>
      <div className="App">
        <TodoForm onNewTask={this.addNewTask} />
        <TaskList
          tasks={this.state.tasks}
          toggleCompleteStatus={this.handleTaskToggle}
          deleteTask={this.handleTaskDelete}
        />
      </div>
      </div>
    );
  }
}

export default App;