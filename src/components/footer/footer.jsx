/* eslint-disable react/no-unescaped-entities */
// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import styles from "./Footer.module.css";


export const Footer = ({completedTasks}) => {
  if (completedTasks) {
    return (
      <footer>
        <code className={styles.footer}>
          Avec TaskFlow tu as eliminé {completedTasks} tâche
          {completedTasks > 1 ? "s" : ""} !
        </code>
      </footer>
    );
  }
  return null;
};
