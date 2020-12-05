
import { useState, useEffect,useContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Login from './screens/login/Login';
import SignUp from './screens/register/SignUp';

import Homepage from './screens/homepage/Homepage'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import TaskEdit from './screens/edit-task/TaskEdit';
import TaskCreate from './screens/create-task/TaskCreate'
import { destroyTask, getAllTasks, postTask, putTask } from './services/tasks'
import TaskDetail from './screens/task-detail/TaskDetail';
import Settings from './screens/settings/Settings';
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { ThemeContext } from './context/themeContext'
import { ThemeProvider } from 'styled-components'
import Sidebar from './components/sidebar/Sidebar';



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const context = useContext(ThemeContext);
  const { theme } = context;

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

  useEffect(() => {
    
    const fetchTasks = async () => {
      const taskData = await getAllTasks();
      setTasks(taskData);
    }
    
    fetchTasks();
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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
 <Switch>
        <Route exact path='/'>
      {/* login */}
    
      <Login handleLogin={handleLogin} />
     
      </Route>
      <Route path='/signup'>
         
          <SignUp handleSignup={handleSignup} />
      </Route>

      <Route path='/homepage'>
         <Sidebar currentUser={currentUser} />
        <Homepage currentUser={currentUser}/>
      </Route>
      
        <Route path='/tasks/new'>
       
        <Sidebar currentUser={currentUser} />
        <TaskCreate handleCreate={handleCreate} />
      </Route>

        <Route path='/tasks/:id/edit'>
        <Sidebar currentUser={currentUser} />
        <TaskEdit tasks={tasks} handleUpdate={handleUpdate}/>
        </Route>
        
        <Route path='/task-detail/:id'>
        <Sidebar currentUser={currentUser} />
        <TaskDetail currentUser={currentUser} handleDelete={handleDelete} />
      </Route>
      
        <Route path='/settings'>
        <Sidebar currentUser={currentUser} />
        <Settings currentUser={currentUser} handleLogout={handleLogout} />
        </Route>
</Switch>
</ThemeProvider>
  );
}

export default App;

