import styles from './Posts.module.css';
import { Trash } from 'phosphor-react'

export function Posts() {
    return (     
            <div className={styles.postsContent}>
               <div className={styles.checkboxCircle}>
                    <label>
                        <input type='checkbox' />
                    </label>
                </div>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quasi mollitia quaerat ipsa</span>
                    <Trash size={24}/>
               
            </div>
    )
}