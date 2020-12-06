import { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import './task-edit.css'


export default function TaskEdit(props) {
  console.log(props);
  const [formData, setFormData] = useState({
    image_url: '',
    description: '',
    deadline: '',
    category: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const taskItem = props.tasks.find(task => task.id === Number(id));
      setFormData({
        image_url: taskItem.image_url,
        description: taskItem.description,
        deadline: taskItem.deadline,
        category: taskItem.category
      })
    }
    if (props.tasks.length){
      prefillForm();
    }
  }, [props.tasks])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
   
      <div className='task-edit-pg'>
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleUpdate(id,formData);
    }}>
          <h3>Edit Task: </h3>
          <div className='input'>
      <label className='input-label'>Image: 
        <input
         className='input-text'
          type='text'
          name='image_url'
          value={formData.image_url}
          onChange={handleChange}
         />
      </label>
      <br />
      <label className='input-label'>Description: 
        <textarea
          className='input-text-description'
                type='text'
                rows='5'
                cols='40'
          name='description'
          value={formData.description}
          onChange={handleChange}
         ></textarea>
      </label>
      <br />
      <label className='input-label'>Deadline: 
        <input
          className='input-text'
          type='text'
          name='deadline'
          value={formData.deadline}
          onChange={handleChange}
         />
      </label>
      <br />
      <label className='input-label'>Category: 
        <input
          className='input-text'
          type='text'
          name='category'
          value={formData.category}
          onChange={handleChange}
        />
            </label>
          </div>
      <br/>
          <button>Submit</button>
        <Link to='/homepage' className='cancel-btn' ><button>Cancel</button></Link>

        </form>

        </div>
      </div>
  )
}