import { createContext, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";

const TaskContext = createContext();

function TaskProvider({children}){
  
  const [tasks, updateTasks] = useLocalStorage('TODO_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModalTask, setOpenModalTask] = useState(false); //modal state
  const [updateTask, setUpdateTask] = useState({});

  const taskAllLength = tasks.length; //Total number of tasks
  const tasksCompleted = tasks.filter(task => task.completed).length; //Total number of complete tasks
  const tasksPending = taskAllLength - tasksCompleted; //Total number of pending tasks
  
  const searched = tasks.filter(task => 
    task.title.includes(searchValue) || task.text.includes(searchValue)
  );
  
  //Open and close modal function
  const toggleModalTask = () => {
    setOpenModalTask(!openModalTask)
  }

  //Random key generator
  const getKeyRandom = () => {
    console.log('new key')
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';

    for (let index = 0; index < 5; index++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }
    return key
  }

  const handlerTaskCompleted = (key) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task, index) => index === key)
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed
    updateTasks(newTasks)
  }

  const handlerDeleteTask = (taskDelete) => {
    const newTasks = [...tasks];
    newTasks.splice(taskDelete,1)
    updateTasks(newTasks)
  }

  const handlerAddTask = (key) => {
    const newTasks = [...tasks];
    const newItem = updateTask;
    const taskIndex = newTasks.findIndex((task) => task.key === key);

    if(taskIndex === -1){
      newTasks.push(newItem);
    }else{
      newTasks[taskIndex] = newItem;
    }

    updateTasks(newTasks)
    toggleModalTask()
  }

  const handlerNewTask = () => {
    const keyGenerator = getKeyRandom();
    const newTaskDefault = {key: keyGenerator, title:'', text:'', completed: false};
    setUpdateTask(newTaskDefault);
    toggleModalTask();
  }
  
  const handlerEditTask = (tasKeyEdit) => {
    const newTasks = [...tasks];
    const updateTaskIndex = newTasks.find((task, index) => index === tasKeyEdit);
    setUpdateTask(updateTaskIndex);
    toggleModalTask()
  }
  
  return(
    <TaskContext.Provider value={{
      tasksCompleted,
      tasksPending,
      taskAllLength,
      searchValue,
      searched,
      openModalTask,
      updateTask,
      setUpdateTask,
      setSearchValue,
      handlerAddTask,
      handlerDeleteTask,
      handlerTaskCompleted,
      handlerEditTask,
      handlerNewTask,
      toggleModalTask
    }}>
      {children}
    </TaskContext.Provider>
  )  
}

export {TaskContext, TaskProvider}