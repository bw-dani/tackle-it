import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addCategory } from '../../services/categories';
import { getOneTask } from '../../services/tasks';

export default function TaskDetail(props) {
  const [taskItem, setTaskItem] = useState(null);
  const [categoryId, setCategoryId] = useState('')
  // We can grab the id of the one food from the url params
  const { id } = useParams();

  // In the useEffect, we make an api call to get the one food and set it in local state
  useEffect(() => {
    const fetchTaskItem = async () => {
      const taskData = await getOneTask(id);
      setTaskItem(taskData);
    }
    fetchTaskItem();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskItem = await addCategory(categoryId, id);
    // I changed our response on the backend for this route.
    // instead of getting a list of just the flavors,
    // I grab the whole food object with it's flavors
    // This makes it easy to replace our state with the updated data.
    setTaskItem(taskItem);
  }

  // this is the handleChange for the select drop down
  // since this form only has one value, we do not need a variable name for the key
  const handleChange = (e) => {
    const { value } = e.target;
    setCategoryId(value);
  }

  return (
    <div>
      <h3>{taskItem?.name}</h3>
      {taskItem?.categories.map(category => (
        <p key={category.id}>{category.name}</p>
      ))}
      {/* below is our for for the flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select defaultValue='default' onChange={handleChange}>
          {/* we can set a default value to tell people to select a flavor*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>-- Select a category --</option>
          {/* now we loop over all flavors and return an <option> tag for each */}
          {props.categories.map(category => (
            // we track the flavor's id as the "value" which will get added to state onChange
            // the flavor's name goes between the open and close tag which is what the user sees
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
        </select>
        <button>add</button>
      </form>
    </div>
  )
}