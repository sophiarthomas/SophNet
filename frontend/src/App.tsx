import { useState, useEffect } from 'react'
import githubProfile from './assets/github.jpg'
import './App.css'

function App() {
  const [message, setMessage] = useState("default");



  useEffect(() => {
    fetch('http://localhost:3000/') // <-- bakcend API URL
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err))
  }, []);


  return (
    <>
      <div>
        <h1>Sophia Thomas</h1>
        <p>Message from backend: {message}</p>
      </div>
      <div>
        <a href="https://github.com/sophiarthomas">
          <img src={githubProfile} className="logo" alt="GitHub Profile" />

        </a>
      </div>
    </>
  )
}

export default App
