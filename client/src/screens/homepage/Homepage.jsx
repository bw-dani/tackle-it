import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Tasks from '../tasks/Tasks'
import {getAllTasks} from '../../services/tasks'
import Sidebar from '../../components/sidebar/Sidebar';
import './homepage.css'

export default function MainContainer(props) {
  const [tasks, setTasks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchTasks = async () => {
      const taskData = await getAllTasks();
      setTasks(taskData);
      const filteredTasks = taskData.filter(task =>
        //make sure post.user_id needs to === props.currentUser.id
        task.user_id === props.currentUser?.id
      )
      setTasks(filteredTasks)
    }
    fetchTasks();
  }, [])

  return (
    <div className='task-page'>
     <div className='sidebar'>
       
      </div>
       <div className='task-list-hm'>
      <Tasks tasks={tasks}/>
      </div>
     
      
      </div>
  )
}