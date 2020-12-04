import { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import { addCategory } from '../../services/categories';
import { getOneTask } from '../../services/tasks';
import React from 'react'

export default function TaskDetail(props) {
  const [taskItem, setTaskItem] = useState(null);
  // We can grab the id of the one task from the url params
  const { id } = useParams();

  // In the useEffect, we make an api call to get the one task and set it in local state
  useEffect(() => {
    const fetchTaskItem = async () => {
      const taskData = await getOneTask(id);
      setTaskItem(taskData);
    }
    fetchTaskItem();
  }, [id])


  return (
    <div>
      <h1>{taskItem?.image_url}</h1>
      <h3>{taskItem?.description}</h3>
      <h3>{taskItem?.deadline}</h3>
      <h3>{taskItem?.category}</h3>
      {/* <h3>{taskItem?.created_at}</h3> */}
      
      {
        props.taskItem?.map(task => (
         
          <React.Fragment key={taskItem?.id}>
           
            <Link to={`/task/${taskItem?.id}/edit`}>
             <button>Edit</button>
            </Link>
         </React.Fragment>
        ))
      }
     
    </div>
  )
}