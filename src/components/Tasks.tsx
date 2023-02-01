import styles from './Tasks.module.css';
import { Trash } from 'phosphor-react'
import { useState } from 'react'

interface TaskProps {
    content: string;
    onDeleteTask: (comment: string) => void;
}
export function Tasks({content, onDeleteTask} : TaskProps) {
    function handleDeleteTask (){
        onDeleteTask(content)
    }
    // const [checked, setChecked] = useState(false);
    // const handleChecked = () => {
    //     setChecked(!checked);
    // };
    // const checkedClass = checked ? 'checked' : '';
    // const containerClass = `checkbox ${checkedClass}`.trim()
    return (     
            <div className={styles.postsContent}>
               <div className={styles.checkboxCircle}>
                    <label>
                        <input 
                        type='checkbox'
                         />
                    </label>
                </div>
                    <span>{content}</span>
                    <button onClick={handleDeleteTask} title='Deletar tarefa'>
                            <Trash size={24}/>

                    </button>
               
            </div>
    )
}