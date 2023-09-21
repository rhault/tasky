import { User } from '../User';
import {Project} from '../Project/Project'
import {Team} from '../Team/Team'
import {Task} from '../Task';
import {Search} from '../Search';
import { TaskItem } from '../Task/TaskItem';
import { EditTask } from '../Task/EditTask';
import { TaskContext } from './TaskContext';
import { useContext } from 'react';
import {Modal} from '../Modal'
import './App.css';

function AppUI(){
  const {
    taskAllLength,
    handlerDeleteTask,
    handlerTaskCompleted,
    handlerEditTask,
    searched,
    openModalTask,
  } = useContext(TaskContext)
  
  return(
    <section className='container'>
      <section className='menu'>
        <div className='menu-title'>
          <p>Tasky</p>
        </div>
        <User/>
        <Project/>
        <Team/>
      </section>
      <section className='task-container'>
        <div className='task-header'>
          <Search/>
        </div>
        <Task>
          {searched.map((task, index) => { 
            return(            
              <TaskItem 
                key={index}
                title = {task.title}
                text = {task.text}
                completed = {task.completed} 
                onCompleted = {() => {handlerTaskCompleted(task.key)}}
                onDelete = {() => {handlerDeleteTask(index)}}
                taskLenght = {taskAllLength}              
                onEdit={() => {handlerEditTask(index)}}
              />
            )
          })}
        </Task>
      </section>
      {openModalTask && 
        <Modal>
          <EditTask/>
        </Modal>
      }
    </section>
  )
}

export {AppUI}