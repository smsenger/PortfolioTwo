import React, { Component } from 'react';
import Task from './Task';

export default class TaskList extends Component {
  render() {
    return (
      <div>
        <h2 className="TaskList__title">Task List</h2>
        {this.props.tasks.map((task, i) => {
          if (!task.complete) {
            return (
              <Task
                task={task}
                key={i}
                toggleCompleteStatus={() => {
                  this.props.toggleCompleteStatus(i);
                }}
                deleteTask={() => {
                  this.props.deleteTask(i);
                }}
              />
            );
          }
          return '';
        })}
        <h2 className="TaskList__title">Completed Tasks</h2>
        {this.props.tasks.map((task, i) => {
          if (task.complete) {
            return (
              <Task
                task={task}
                key={i}
                toggleCompleteStatus={() => {
                  this.props.toggleCompleteStatus(i);
                }}
                deleteTask={() => {
                  this.props.deleteTask(i);
                }}
              />
            );
          }
          return '';
        })}
      </div>
    );
  }
}