import './Task.css';
import {CreateTaskButton} from './CreateTaskButton';

function Task(props) {
  return (
    <div className='task'>    
      <CreateTaskButton/>
      {props.children}
    </div> 
  ) 
}

export {Task}