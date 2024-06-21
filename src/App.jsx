import { useState } from 'react';
import { useFirebase } from './context/Firebase'
import './App.css'

function App() {

  const firebase = useFirebase()
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')

  console.log("Firebase", firebase);

  return (
    <div>
      <h1>Firebase</h1>
      <input
      onChange={(e) => setEmail(e.target.value)}
      value={email} 
      type="email" placeholder='Enter Email' />
      <input
      onChange={(e) => setPassword(e.target.value)}
      value={password} 
      type="password" placeholder='Enter Password' />
      <button onClick={() => firebase.signupUserWithEmailAndPassword}>Signup</button>
    </div>
  )
}

export default App
