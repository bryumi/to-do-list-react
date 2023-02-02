import styles from './Main.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Tasks } from './Tasks'
import { TaskEmpty  } from './TaskEmpty';

export function Main() {
    const [tasks, setTasks] = useState([
        'estudar react'
    ]);
    const [newTask, setNewTask] = useState('');

    const [countTasks, setCountTasks] = useState(1)
    

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
        
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        setTasks([...tasks, newTask]);
        setNewTask('');
        setCountTasks((state) => {
            return state +1
        });
        console.log(setTasks)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteTask(taskToDelete: string){
        const taskWithoutDeletedOne = tasks.filter(task => {
            return task !== taskToDelete
        })

        setTasks(taskWithoutDeletedOne)
        setCountTasks((state) => {
            return state - 1
        });
    }
    const [finishedTasks, setFinishedTasks] = useState(0)
    function updateFinished(finished: number) {
        setFinishedTasks(finished)
    }
    const isNewTaskEmpty = newTask.length === 0
    return (
        <main>
            <form className={styles.formContent} onSubmit={handleCreateNewTask}>

                <input
                    className={styles.input}
                    name='task'
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    placeholder='Adicione uma nova tarefa'>

                </input>
                <button
                    className={styles.createButton}
                    type="submit"
                    
                    disabled={isNewTaskEmpty}
                >
                    Criar
                    <PlusCircle size={32} />
                </button>
            </form>

            <div>
                <header className={styles.tasksHeader}>
                    <div className={styles.tasksCreated}>
                        <strong>Tarefas Criadas</strong>
                        <span>{countTasks}</span>
                    </div>

                    <div className={styles.tasksFinished}>
                        <strong>Concluídas</strong>
                        <span>{finishedTasks} de {countTasks}
                        </span>
                    </div>
                </header>

                <hr />

                <div className={styles.tasksContent}>
                    {
                        countTasks === 0 &&
                        <TaskEmpty/>
                    }
                    <div className={styles.taskList}>
                        {tasks.map(task => {
                            return (
                                <Tasks
                                    key={task}
                                    content={task}
                                    onDeleteTask= {deleteTask} 
                                    handleFinished= {updateFinished}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}