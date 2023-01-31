import styles from './Tasks.module.css';
import { ClipboardText } from 'phosphor-react'


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
                <div className={styles.content}>
                    <ClipboardText size={56} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
       </div>
    )
}