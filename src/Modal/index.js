import {createPortal} from 'react-dom';
import { useContext } from 'react';
import { TaskContext } from '../App/TaskContext';
import './Modal.css';

function Modal({children}){

  const {handlerAddTask, task} = useContext(TaskContext);  
  const modalClose = ({target}) => {
    if(target.attributes.class){
      if(target.attributes.class.value === 'modal'){
        handlerAddTask(task.key)
      }
    }
  }

  return createPortal(
    <div className="modal" onClick={modalClose}>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export {Modal}