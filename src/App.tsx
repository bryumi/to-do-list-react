import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

export function App() {
  return (
    <div>
        <Header/>

        <div className={styles.inputContent}>
          <Input/>
        </div>

        <main>
          <div className={styles.tasks}>
            <Tasks/>
          </div>
        </main>
    </div>
  )

}


export default App
