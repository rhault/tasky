import { useContext } from 'react';
import add from '../../icon/add.svg';
import { TaskContext } from '../../App/TaskContext';
import './CreateTaskButton.css';

function CreateTaskButton() {
  const {handlerNewTask} = useContext(TaskContext); 

  return (
    <div className='taskButton-container' onClick={handlerNewTask}>
      <span className='taskButton-content'>
        <img src={add} alt='add'/>
        <p>
          Add new task
        </p>
      </span>
    </div>
  )
}

export {CreateTaskButton}