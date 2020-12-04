import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';

function Settings(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <Sidebar />
      <div className='userinfo-div'>
      {
        currentUser ?
          <>
            <p>Name: {currentUser.name}</p>
            <p>Username: {currentUser.username}</p>
            
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login/Register</Link>
        }
      </div>
    </div>
  );
}

export default Settings;