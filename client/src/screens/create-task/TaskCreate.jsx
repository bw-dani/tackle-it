import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import './task-create.css'

export default function TaskCreate(props) {
  const [formData, setFormData] = useState({
    image_url: '',
    description: '',
    deadline: '',
    category: ''
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
      props.handleCreate(formData);
    }}>
    
      <div className='create-task-form'>
        <h3>New Task: </h3>
        <div>
        <div className='input'>
      <label>
            <input
              className='input-text'
          type='text'
            name='image_url'
            placeholder='Upload umage url:'
          value={formData.image_url}
          onChange={handleChange}
         />
      </label>
      <br />
      <label>
            <textarea
              className='input-text-description'
                type='text'
                rows='5'
                cols='40'
            name='description'
            placeholder='Task description:'
          value={formData.description}
          onChange={handleChange}
     ></textarea>
      </label>
      <br />
      <label>
            <input
              className='input-text'
          type='text'
            name='deadline'
            placeholder='Deadline:'
          value={formData.deadline}
          onChange={handleChange}
         />
      </label>
      <br />
      <label>
            <input
              className='input-text'
          type='text'
            name='category'
            placeholder='Category:'
          value={formData.category}
          onChange={handleChange}
        />
          </label>
          </div>
          </div>
      <br/>
        <button>Submit</button>
        </div>

    </form>
  )
}