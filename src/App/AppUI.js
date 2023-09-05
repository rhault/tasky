import { User } from '../User';
import {Project} from '../Project/Project'
import {Team} from '../Team/Team'
import {Task} from '../Task';
import {Search} from '../Search';
import { TaskItem } from '../Task/TaskItem';
import './App.css';

function AppUI({
  tasksCompleted,
  tasksPending,
  taskAll,
  searchValue,
  setSearchValue,
  handlerAddTasks,
  handlerDeleteTask,
  handlerTaskCompleted,
  searched
}){
  return(
    <section className='container'>
      <section className='menu'>
        <div className='menu-title'>
          <p>Tasky</p>
        </div>
        <User 
          tasksCompleted={tasksCompleted}
          tasksPending={tasksPending}
          taskAll={taskAll}
        />
        <Project/>
        <Team/>
      </section>
      <section className='task-container'>
        <div className='task-header'>
          <Search 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
          />
        </div>
        <Task onCreate = {handlerAddTasks}>
          {searched.map((task, index) => { 
            return(            
              <TaskItem 
                key={index}
                title = {task.title}
                text = {task.text}
                completed = {task.completed} 
                onCompleted = {() => {handlerTaskCompleted(index)}}
                onDelete = {() => {handlerDeleteTask(index)}}
                taskLenght = {taskAll}              
              />
            )
          })}
        </Task>
      </section>
    </section>
  )
}

export {AppUI}