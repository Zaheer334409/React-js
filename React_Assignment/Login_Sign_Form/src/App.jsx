import { useState } from 'react'
import './App.css'

function App() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (password.length > 6) {
      setMessage("SignUp SuccessFull! " + email);
    } else {
      setMessage("Password is too short! Please enter at least 6 characters");
    }
    console.log("Clicked!");

  }

  return (
    <>
      <div>React SignUP Form</div><br />
      <form onSubmit={handleSubmit}>
        <input className='border' type='email' onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <input className='border' type='password' onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <input className='border' type='submit' />
      </form>

      <p>{message}</p>
    </>
  )
}

export default App
