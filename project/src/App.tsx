import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
  const userInput = 'Nice'
  const a = 'asddk'
  const [input, setInput] = useState('')
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. test bro
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <input onChange={(e) => setInput(e.target.value)} />
        <p>{input}</p>
        <div>{userInput}</div>
      </header>
    </div>
  )
}

export default App
