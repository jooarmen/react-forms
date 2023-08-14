import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenitcate from './components/Authenitcate'

function App() {
  const [token, setToken]=useState(null)
  return (
    <>
       <SignUpForm token={token} setToken={setToken} />
       <Authenitcate token={token} setToken={setToken} />
      
    </>
  )
}

export default App
