// Ce composant est utilisé pour afficher la liste des tâches.
import styles from "./TaskList.module.css";
import { TaskItem } from "../taskItem/taskItem";

export const TaskList = ({
  tasksList,
  uncompletedTasks,
  editTask,
  deleteTask,
}) => {

  const tasKList = tasksList.map((task) => (
    <TaskItem 
      key={task.id} 
      task={task} 
      editTask={editTask} 
      deleteTask={deleteTask} 
    />
  ));

  if (tasKList && tasKList.length > 0) {
    return (
      <div className="box">

        <h2 className={styles.title}>
          {uncompletedTasks > 0 && (
              <>📝 Il te reste encore <span className="important">{uncompletedTasks}</span> tâches à accomplir</>
          )}

          {uncompletedTasks === 0 && (
            <> 🤝 Genial, tu as accompli toutes tes taches !</>
          )}
        </h2>

        {tasksList && tasksList.length > 0 && (
          <ul className={styles.container}>
            {tasKList}
          </ul>
        )}
      </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.emptyState}>
        👋 Salut, Rien a faire pour le moment ! profite de ton temps libre.
      </h2>
    </div>
  );
};
