import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneTask } from '../../services/tasks';
import React from 'react'
import './task-detail.css'
import Sidebar from '../../components/sidebar/Sidebar'

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

  const taskImg = {
    borderRadius: '50%',
    width: '40%',
    height: '50%'

  }

  return (
    <>
  
    <div className='task-detail'>
      <img style={taskImg} src={taskItem?.image_url}/> 
      <h3>{taskItem?.description}</h3>
      <h3>{taskItem?.deadline}</h3>
      <h3>{taskItem?.category}</h3>
      <div className='editDelete-btns'>
            <Link to={`/tasks/${taskItem?.id}/edit`} className='edit-btn'>
             <button>Edit</button>
      </Link>
      
      <button onClick={() => props.handleDelete(taskItem?.id)}>Delete</button>
        </div>
      </div>
    </>
  )
}