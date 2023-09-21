import { useContext, useState } from 'react';
import {Editor, EditorState, convertToRaw, ContentState} from 'draft-js';
import { UserIcon } from '../../UserIcon/UserIcon';
import {TodoIcon} from '../../icon/TodoIcon';
import more from '../../icon/more.svg';
import './EditTask.css';
import { TaskContext } from '../../App/TaskContext';

function EditTask() {

  const {task, setTask, handlerTaskCompleted} = useContext(TaskContext);
  const [title, setTitle] = useState(task.title);

  //Editor State
  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(ContentState.createFromText(task.text))
  );

  const handlerEditorChange = (newEditorState) => {
    const newTextTask = task;
    const contentState = newEditorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    
    rawContent.blocks.map(block => (
      newTextTask['text'] = block.text
    ));

    setEditorState(newEditorState)
    setTask(newTextTask);
  }

  const getEditorTitle = (event) => {
    setTitle(event.target.value);
    const newTitletTask = task;
    newTitletTask['title'] = event.target.value;
    setTask(newTitletTask)
  };

  return (
    <div className='task-item'>
      <div className='task-content'>
        <div className='text-container'>
          {<span className={`status ${task.completed === true ? 'completed' : 'todo'}`}>
            {task.completed === false ? 'To do' : 'Completed'}
          </span>}
          <img className='task-more' src={more} alt='more'/>
          <input
              className='task-title'
              type='text'
              value={title} 
              onChange={getEditorTitle} 
              placeholder='Title'
          />
          <div className='task-text'>
            <Editor 
            className='text-content'
            placeholder={"Create task..."} 
            editorState={editorState} 
            onChange={handlerEditorChange}
          />
          </div>
        </div> 
        <div className='task-team'>
          <UserIcon name='Raul'/>
        </div>
        <div className='task-option'>
          <button onClick={() => handlerTaskCompleted(task.key)}>
            <TodoIcon type='done' color='#142475f0' state={task.completed}/> 
          </button>
          <button>
            <TodoIcon type='delete' color='#142475f0'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export {EditTask} 