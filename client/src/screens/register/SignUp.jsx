import { useState } from 'react';
import './signup.css'

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    password: "",
    image_url:""
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
      props.handleSignup(formData);
    }}>
      <div className='signup-title'>
        <h3>Sign-Up</h3>
      </div>
     
      <div className='signup-form'>

      <label>
          <input
            className='su-input'
          type='text'
            name='image'
            placeholder='Picture'
          src={formData.image_url}
          onChange={handleChange}
        />
      </label>
      <label>
          <input
            className='su-input'
          type='text'
            name='name'
            placeholder='Name:'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
          <input
            className='su-input'
          type='text'
            name='username'
            placeholder='Username:'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
          <input
            className='su-input'
          type='password'
            name='password'
            placeholder='Password: '
          value={formData.password}
          onChange={handleChange}
        />
        </label>
        </div>
        <br />
        <div className='signup-btn'>
        <button>Sign-Up</button>
      </div>
    </form>
  )
}