// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import { useState } from "react";
import styles from "./TaskInput.module.css";

export const TaskInput = ({addTask}) => {

  const [taskTitle, setTaskTitle] = useState('');

  const handleInputChange = (event) => {
    setTaskTitle(event.target.value);
  }

  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  }

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>🎯 ajoute ta prochaine tache</h2>
      <form className={styles.container} onSubmit={handleAddTask}>
        <input 
          type="text" 
          className={styles.input}
          placeholder="Indiquer un titre de tache explicite."
          onChange={handleInputChange}
          value={taskTitle}
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
