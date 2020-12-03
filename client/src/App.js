import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import MainContainer from './container/MainContainer';
import Layout from './layouts/Layout';
import EditTask from './screens/edit-task/TaskEdit';
import Login from './screens/login/Login';
import SignUp from './screens/register/SignUp';
import {getAllTasks} from './screens/tasks/Tasks'
import Homepage from './screens/homepage/Homepage'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import TaskEdit from './screens/edit-task/TaskEdit';
import TaskCreate from './screens/create-task/TaskCreate'
import { destroyTask, getAllTask, postTask, putTask } from './services/tasks'


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
    history.push('/');
  }

  const handleSignup = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
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

  return (
  //   <Layout
  //   currentUser={currentUser}
  //   handleLogout={handleLogout}
  // >
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

        <Route path='/task-edit'>
          {/* homepage */}
        <TaskEdit currentUser={currentUser}/>
        </Route>
        
        {/* <Route path='/task-edit'> */}
          {/* edit task */}
        {/* <EditTask currentUser={currentUser}/>
        </Route> */}
</Switch>
        //  </Layout> 
  );
}

export default App;