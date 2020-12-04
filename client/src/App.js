
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
// import Sidebar from './components/sidebar/Sidebar';
// import MainContainer from './container/MainContainer';
import Layout from './layouts/Layout';
// import EditTask from './screens/edit-task/TaskEdit';
import Login from './screens/login/Login';
import SignUp from './screens/register/SignUp';
import {getAllTasks} from './screens/tasks/Tasks'
import Homepage from './screens/homepage/Homepage'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import TaskEdit from './screens/edit-task/TaskEdit';
import TaskCreate from './screens/create-task/TaskCreate'
import { destroyTask, getAllTask, postTask, putTask } from './services/tasks'
import TaskDetail from './screens/task-detail/TaskDetail';
import Settings from './screens/settings/Settings';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/homepage');
  }

  const handleSignup = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/homepage');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  const handleCreate = async (taskData) => {
    const newTask = await postTask(taskData);
    setTasks(prevState => [...prevState, newTask]);
    history.push('/homepage');
  }

  const handleUpdate = async (id, taskData) => {
    const updatedTask = await putTask(id, taskData);
    setTasks(prevState => prevState.map(task => {
      return task.id === Number(id) ? updatedTask : task
    }))
    history.push('/homepage');
  }

  const handleDelete = async (id) => {
    await destroyTask(id);
    setTasks(prevState => prevState.filter(task => task.id !== id))
    history.push('/homepage');
  }


  return (

 <Switch>
        <Route exact path='/'>
      {/* login */}
    
      <Login handleLogin={handleLogin} />
     
      </Route>
      <Route path='/signup'>
          {/* signup */}
          <SignUp handleSignup={handleSignup} />
      </Route>

      <Route path='/homepage'>
          {/* homepage */}
        <Homepage currentUser={currentUser}/>
      </Route>
      
      <Route path='/tasks/new'>
        <TaskCreate handleCreate={handleCreate} />
      </Route>

        <Route path='/tasks/:id/edit'>
          {/* homepage */}
        <TaskEdit tasks={tasks} handleUpdate={handleUpdate}/>
        </Route>
        
        <Route path='/task-detail/:id'>
          {/* edit task */}
        <TaskDetail currentUser={currentUser} handleDelete={handleDelete} />
      </Route>
      
      <Route path='/settings'>
        <Settings currentUser={currentUser}  />
        </Route>
</Switch>
      
  );
}

export default App;

