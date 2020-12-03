import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Sidebar from './components/sidebar/Sidebar';
// import MainContainer from './containers/MainContainer';
import Layout from './layouts/Layout';
import Login from './screens/login/Login';
import SignUp from './screens/register/SignUp';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
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
          {/* register */}
          <SignUp handleSignup={handleSignup} />
        </Route>

</Switch>
        // </Layout> 
  );
}

export default App;