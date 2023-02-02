import './Tasks.css';
import { Trash } from 'phosphor-react'
import { SelectHTMLAttributes, useState } from 'react'

interface TaskProps extends SelectHTMLAttributes<HTMLAllCollection>{
    content: string;
    onDeleteTask: (comment: string) => void;
    
}
export function Tasks({content, onDeleteTask, } : TaskProps) {
    function handleDeleteTask (){
        onDeleteTask(content)
    }
    const [checked, setChecked] = useState(false);
    const handleChecked = () => {
        setChecked(!checked)
        
    };
    const checkedClass = checked ? 'checked' : '';
    const containerClass = `checkbox ${checkedClass}`.trim()
    return (     
            <div className='postsContent'>
               <div className={containerClass} onClick={handleChecked}>
                  
                </div>
                    <span>{content}</span>
                    <button onClick={handleDeleteTask} title='Deletar tarefa'>
                            <Trash size={24}/>

                    </button>
               
            </div>
    )
}