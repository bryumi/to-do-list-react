import styles from './TaskEmpty.module.css';
import { ClipboardText } from 'phosphor-react'


export function TaskEmpty() {
    return (     
            <div className={styles.contentEmpty}>
                <ClipboardText size={56} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
    )
}