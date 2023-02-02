import './Tasks.css';
import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

interface TaskProps extends ChangeEvent<HTMLAllCollection>{
    content: string;
    onDeleteTask: (comment: string) => void;
    handleFinished: (n: number) => void;
}
export function Tasks({content, onDeleteTask, handleFinished} : TaskProps) {
    
    function handleDeleteTask (){
        onDeleteTask(content)
    }
    const [checked, setChecked] = useState(true);
    const [countTaskFinished, setCountTaskFinished] = useState(1);
    const handleChecked = () => {
        setChecked(!checked) //false
        
        console.log(checked)
        if (!checked){
            setCountTaskFinished((state) => {
                return state + 1
            })
            console.log(countTaskFinished)
        } else {
            setCountTaskFinished((state) => {
                return state - 1
            })
        }

        handleFinished(countTaskFinished)
        console.log(countTaskFinished)
        
    };
    
    const checkedClass = !checked ? 'checked' : '';
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