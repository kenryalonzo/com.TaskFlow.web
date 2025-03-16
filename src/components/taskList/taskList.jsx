// Ce composant est utilisé pour afficher la liste des tâches.
import styles from "./TaskList.module.css";
import { TaskItem } from "../taskItem/taskItem";

export const TaskList = () => {
  return (
    <div className="box">
      <h2 className={styles.title}>
        📝 Il te reste encore x tâches à accomplir
      </h2>
      <TaskItem />
    </div>
  );
};
