import { useContext, useState } from 'react';
import { UserIcon } from '../../UserIcon/UserIcon';
import {TodoIcon} from '../../icon/TodoIcon';
import more from '../../icon/more.svg';
import './EditTask.css';
import { TaskContext } from '../../App/TaskContext';

function EditTask() {

  const {updateTask, setUpdateTask} = useContext(TaskContext);
  const [title, setTitle] = useState(updateTask.title);
  const [text, setText] = useState(updateTask.text);
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    const newTitle = updateTask;
    newTitle['title'] = event.target.value;
    setUpdateTask(newTitle)
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    const newTitle = updateTask;
    newTitle['text'] = event.target.value;
    setUpdateTask(newTitle)
  };

  return (
    <div className='task-item'>
      <div className='task-content'>
        <div className='text-container'>
          {<span className={updateTask.completed === true ? 'completed' : 'todo'}>
            {updateTask.completed === false ? 'To do' : 'Completed'}
          </span>}
          <img className='task-more' src={more} alt='more'/>
          <input
              className='task-title'
              type='text'
              value={title} 
              onChange={handleTitleChange} 
              placeholder='Title'
            />
          <input
              className='task-text'
              type='text'
              value={text} 
              onChange={handleTextChange} 
              placeholder='Create a task...'
            />
        </div> 
        <div className='task-team'>
          <UserIcon name='Raul'/>
        </div>
        <div className='task-option'>
          <button >
            <TodoIcon type='done' color='#142475f0' state={updateTask.completed}/> 
          </button>
          <button >
            <TodoIcon type='delete' color='#142475f0'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export {EditTask} 