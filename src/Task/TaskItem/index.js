import { useEffect, useRef, useState } from 'react';
import { UserIcon } from '../../UserIcon/UserIcon';
import {TodoIcon} from '../../icon/TodoIcon';
import more from '../../icon/more.svg';
import './TaskItem.css';

function TaskItem(props) {
  const itemContent = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);
  const styleSpan= {gridRowEnd: `span ${itemHeight}`};
  
  useEffect(() => {
    if (itemContent.current) {
      //height  of the content + 70 (the sum of gap[20] + height task-option[30] because it an absolute position + margin[20]   
      // 80 the sum of grid-auto-rows: 60px; + gap[20]
      setItemHeight(
        Math.ceil((itemContent.current.getBoundingClientRect().height + 70)/ (80))
      )
    }
  }, [props.taskLenght])

  return (
    <div className='task-item' style={styleSpan}>
      <div className='task-container' ref={itemContent}>
        <div className='task-content' onClick={props.onEdit}>
          <span className={props.completed === true ? 'completed' : 'todo'}>
            {props.completed === false ? 'To do' : 'Completed'}
          </span>
          <img className='task-more' src={more} alt='more'/>
          <p className='task-title'>{props.title}</p>
          <p className='task-text'>{props.text}</p>
          <div className='task-team'>
            <UserIcon name='Raul'/>
          </div>
        </div> 
        <div className='task-option'>
          <button onClick={props.onCompleted}>
            <TodoIcon type='done' color='#142475f0' state={props.completed}/>
          </button>
          <button onClick={props.onDelete}>
            <TodoIcon type='delete' color='#142475f0'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export {TaskItem} 