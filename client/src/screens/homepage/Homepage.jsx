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
    }
    fetchTasks();
  }, [])
  
  return (
    <div className='task-page'>
     <div className='sidebar'>
        <Sidebar />
      </div>
       <div className='task-list'>
      <Tasks tasks={tasks}/>
       </div>
     
      
      </div>
  )
}