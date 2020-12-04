import React from 'react';
import { Link } from 'react-router-dom';

export default function Tasks(props) {
  return (
    <div>
      <h3>Tasks</h3>
      {
        props.tasks.map(task => (
          <Link to={`/task-detail/${task.id}`} > <p key={task.id}>{task.description} - 
          {task.deadline}</p> </Link>
          
        ))
      }
       <br />
      <Link to='/tasks/new'><button>Create Task</button></Link>
    </div>
  )
}