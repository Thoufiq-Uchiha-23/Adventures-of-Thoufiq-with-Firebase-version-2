import { useFirebase } from './context/Firebase'
import './App.css'

function App() {

  const firebase = useFirebase()

  console.log("Firebase", firebase);

  return (
    <div>
      <h1>Firebase</h1>
      <input type="email" placeholder='Enter Email' />
      <input type="password" placeholder='Enter Password' />
      <button onClick={() => {}}>Signup</button>
    </div>
  )
}

export default App
