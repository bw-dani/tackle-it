import { useState } from 'react';
import {Link} from 'react-router-dom'
import '../login/login.css'

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (

    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      
      <div className='title'>
        <h1>TACKLE-IT</h1>
      </div>
      <div className='login-form'>
      <div className='input'>
      <label >
            <input
              className='input-text'
          type='text'
          name='username'
          placeholder='Username:'
          value={formData.username}
          onChange={handleChange}
        />
        </label>
      </div>
      <br />
      <div className='input'> 
      <label>
            <input
              className='input-text'
          type='password'
          name='password'
          placeholder='Password:'
          value={formData.password}
          onChange={handleChange}
        />
        </label>
      </div>
        <br />
        <div className='ls-btn'>
      <Link to='/signup' className='signup-btn'><button>Sign-Up</button></Link>
          <button className='submit-btn'>Submit</button>
        </div>
      </div>
    </form>
  )
  
}

export default Login;