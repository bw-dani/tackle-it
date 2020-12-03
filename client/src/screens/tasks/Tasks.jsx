import React from 'react';
// import { Link } from 'react-router-dom';

export default function Tasks(props) {
  return (
    <div>
      <h3>Tasks</h3>
      {
        props.tasks.map(task => (
          <p key={task.id}>{task.description} - 
          {task.deadline}</p>
          
        ))
      }
    </div>
  )
}