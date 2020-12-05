import React from 'react';
import { Link } from 'react-router-dom';
import './tasks.css'
export default function Tasks(props) {

  const taskImg = {
    borderRadius: '50%',
    width: '10%',
    height: '55%'
  }
  return (
    <div className='all-tasks'>
      <h3>Tasks: </h3>
      
      {
          props.tasks.map(task => (
          <div className='tasks-list'>
          <Link to={`/task-detail/${task.id}`} className='t-item' > <img style={taskImg} src={task.image_url}/> <p key={task.id}>Description: {task.description}  
           </p> <p key={task.id}> Deadline: {task.deadline} </p></Link> <hr/>
         </div>
        ))
        }
      
       <br />
      <Link to='/tasks/new'><button>Create Task</button></Link>
    </div>
  )
}