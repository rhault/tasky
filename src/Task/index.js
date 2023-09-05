import './Task.css';
import {CreateTaskButton} from './CreateTaskButton';

function Task(props) {
  return (
    <div className='task'>    
      <CreateTaskButton onCreate={props.onCreate}/>
      {props.children}
    </div> 
  ) 
}

export {Task}