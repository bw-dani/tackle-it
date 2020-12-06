import React from 'react';
import { Link } from 'react-router-dom';
import './settings.css'

function Settings(props) {
  const { currentUser, handleLogout } = props;

  const userStyle = {
    borderRadius: '50%',
    width: '20%',
    height: '40%',
    marginBottom:'30px'
}

  return (
    <div className='settings-div'>
      <div className='userinfo-div'>
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