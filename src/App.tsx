import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Main } from './components/Main'



export function App() {
  return (
    <div>
        <Header/>

        <div className={styles.inputContent}>
          <Main/>
        </div>

    </div>
  )

}


export default App
