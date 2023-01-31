import styles from './Input.module.css'
import { PlusCircle } from 'phosphor-react'

export function Input() {
    return (
        <form className={styles.formContent}>
            <input  className={styles.input}
                    placeholder='Adicione uma nova tarefa'></input>
            <button className= {styles.createButton} type="submit">
                Criar
                <PlusCircle size={32} />
            </button>
       </form>
    )
}