import styles from './Main.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Tasks } from './Tasks'



export function Main() {
    const [tasks, setTasks] = useState([
        'estudar react'
    ]);
    const [newTask, setNewTask] = useState('');

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
        console.log(event.target.value)
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        setTasks([...tasks, newTask]);
        setNewTask('');
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
                        <span>0</span>
                    </div>

                    <div className={styles.tasksFinished}>
                        <strong>Concluídas</strong>
                        <span>0</span>
                    </div>
                </header>

                <hr />

                <div className={styles.tasksContent}>
                    <div className={styles.taskList}>
                        {tasks.map(task => {
                            return (
                                <Tasks
                                    key={task}
                                    content={task}
                                    onDeleteTask= {deleteTask} 
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}