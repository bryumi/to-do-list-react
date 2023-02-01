import styles from './Tasks.module.css';
import { TaskEmpty } from './TaskEmpty';
import { Posts } from './Posts';


export function Tasks() {
    return (
       <div>
            <header className= {styles.tasksHeader}>
                <div className={styles.tasksCreated}>
                    <strong>Tarefas Criadas</strong>
                    <span>0</span>
                </div>

                <div className={styles.tasksFinished}>
                    <strong>Concluídas</strong>
                    <span>0</span>
                </div>
            </header>

            <hr />

            <div className={styles.tasksContent}>
              {/* <TaskEmpty/>  */}
               <Posts/> 
            </div>
       </div>
    )
}