import React from 'react';
import { Link } from 'react-router-dom';

export default function Foods(props) {
  return (
    <div>
      <h3>Tasks</h3>
      {
        props.tasks.map(task => (
          <React.Fragment key={task.id}>
            <Link to={`/tasks/${task.id}`}><p>{task.name}</p></Link>
            {
              task.user_id === props.currentUser?.id &&
              <>
                <Link to={`/tasks/${task.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => props.handleDelete(task.id)}>Delete</button>
              </>
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/tasks/new'><button>Create</button></Link>
    </div>
  )
}