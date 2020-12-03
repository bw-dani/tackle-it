import React, {useState, useEffect} from 'react';
import { useHistory, useParams} from 'react-router-dom'
import { getOneTasks, putTask } from '../../services/tasks'
import './task-edit.css'
function EditTask(props) {
  const [task, setTask] = useState({
    image_url: '',
    description: '',
    created_at: '',
    deadline: '',
    category_id:''
  });
  const history = useHistory();
  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    const fetchTask = async () => {
      const task = await getOneTasks(id);
      setPost(post);
    }
    fetchTask();
  }, [id]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value
    });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await putTask(id, task);
    setUpdated(updated);
    history.push('/tasks')
  }
  return (
    <div id="edit-post-main-container">
      <form onSubmit={handleSubmit}>
        <div id="edit-post-sub-container">
          <h3 id="edit-post-title">Edit Task</h3>
          <div id="edit-post-details-box">
            <div id="edit-title-box">
              <input
                className="edit-post-input"
                type='text'
                name='title'
                value={task.description}
                onChange={handleChange}
                />
            </div>
            <div id="edit-content-box">
              <input
                className="edit-post-input"
                id="edit-content-input"
                type='textarea'
                name='content'
                value={post.content}
                onChange={handleChange}
                />
            </div>
            <div id="edit-image-box">
              <input
                className="edit-post-input"
                type='text'
                name='image_url'
                value={post.image_url}
                onChange={handleChange}
                />
            </div>
            </div>
            <button type="submit" id="edit-post-submit-button">Submit</button>
          </div>
        </form>
      </div>
  )
}
export default EditTask;