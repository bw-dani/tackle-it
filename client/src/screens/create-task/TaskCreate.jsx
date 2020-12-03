import { useState } from 'react'

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
      <h3>Create Task</h3>
      <label>image
        <input
          type='text'
          name='image_url'
          value={formData.image_url}
          onChange={handleChange}
         />
      </label>
      <br />
      <label>description
        <input
          type='text'
          name='description'
          value={formData.description}
          onChange={handleChange}
         />
      </label>
      <br />
      <label>deadline:
        <input
          type='text'
          name='deadline'
          value={formData.deadline}
          onChange={handleChange}
         />
      </label>
      <br />
      <label>category
        <input
          type='text'
          name='category'
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button>Submit</button>
    </form>
  )
}