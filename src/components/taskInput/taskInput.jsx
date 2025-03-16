// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import styles from "./TaskInput.module.css";

export const TaskInput = () => {
  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>🎯 ajoute ta prochaine tache</h2>
      <form className={styles.container}>
        <input 
          type="text" 
          className={styles.input}
          placeholder="Indiquer un titre de tache explicite."
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
