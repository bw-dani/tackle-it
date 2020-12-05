import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css'

function Settings(props) {
  const { currentUser, handleLogout } = props;

  const userStyle = {
    borderRadius: '50%',
    width: '30%',
    height: '50%'
}

  return (
    <div className='settings-div'>
      <Sidebar />
      <div className='userinfo-div'>
{/* <h1>PROFILE</h1> */}
      {
        currentUser ?
            <>
              <img style={userStyle} className='user-pic' src={currentUser.image_url} />
              <div className='user-info-div'>
            <p className='user-info'>Name: {currentUser.name}</p>
            <p className='user-info'>Username: {currentUser.username}</p>
            </div>

            <Link to='/'><button onClick={handleLogout}>Logout</button></Link>
          </>
          :
          <Link to='/login'>Login/Register</Link>
        }
      </div>
    </div>
  );
}

export default Settings;