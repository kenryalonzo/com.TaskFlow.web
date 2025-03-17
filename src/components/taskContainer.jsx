import { useEffect, useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";


// Ce composant est utilisé pour afficher l'intégralité de la fonctionalité de Tache.
export const TaskContainer = () => {

  const [tasksList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasksList");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  const saveTasksToLocalStorage = (tasksList) => {
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
  }

  const addTask = (title) => {
    const newTask = {
      id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
      title: title,
      completed: false
    };
    const updatedTasks = [...tasksList, newTask];
    setTaskList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (id, completedValue) => {
    const updatedTasks = tasksList.map((task) => 
        task.id === id ? {...task, completed: completedValue} : task
    );
    setTaskList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasksList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  }

  const getTaskCounts = () => {
    const completedTasks = tasksList.filter((task) => task.completed).length
    const uncompletedTasks = tasksList.length - completedTasks;
    return {
      completedTasks,
      uncompletedTasks
    }
  }

  const {completedTasks, uncompletedTasks} = getTaskCounts();
  
  return (
    <main>
      <Header />
      <TaskInput addTask={addTask}/>
      <TaskList 
        tasksList={tasksList}
        editTask={editTask}
        deleteTask={deleteTask}
        uncompletedTasks={uncompletedTasks} 
      />
      <Footer completedTasks={completedTasks} />
    </main>
  );
};
