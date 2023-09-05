import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';  

function App() {
  const [tasks, updateTasks] = useLocalStorage('TODO_V1', []);
  const [searchValue, setSearchValue] = useState('');
  
  const taskAll = tasks.length;
  const tasksCompleted = tasks.filter(task => task.completed).length;
  const tasksPending = taskAll - tasksCompleted;
  const searched = tasks.filter(task => 
    task.title.includes(searchValue) || task.text.includes(searchValue)
  );

  const handlerTaskCompleted = (tasKeyModify) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task, index) => index === tasKeyModify)
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed
    updateTasks(newTasks)
  }

  const handlerDeleteTask = (taskDelete) => {
    const newTasks = [...tasks];
    newTasks.splice(taskDelete,1)
    updateTasks(newTasks)
  }

  const handlerAddTask = () => {
    const newTtem = {title:"task new", text:"text new", completed: false}
    const newTasks = [newTtem, ...tasks];
    updateTasks(newTasks)
  }

  return (
    <AppUI 
      tasksCompleted={tasksCompleted}
      tasksPending={tasksPending}
      taskAll={taskAll}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      handlerAddTask={handlerAddTask}
      handlerDeleteTask={handlerDeleteTask}
      handlerTaskCompleted={handlerTaskCompleted}
      searched={searched}
    />    
  );
}

export default App;
