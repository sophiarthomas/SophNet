import React, { useState, useEffect } from 'react'
import githubProfile from './assets/github.jpg'
import './App.css'
import NavBar from './molecules/AppBar';

function App() {
  const [message, setMessage] = useState("default");

  useEffect(() => {
    fetch('http://localhost:3000/') // <-- bakcend API URL
      .then(res => res.json())
      .then(data => setMessage(data.message2))
      .catch(err => console.error(err))
  }, []);

  return (
    <>
      <NavBar nav={{
        home: "Home",
        about: "About Me",
        experience: "Experience"
      }} />
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-bl-xl grow place-items-start">
          <a href="https://github.com/sophiarthomas">
            <img src={githubProfile} className="logo" alt="GitHub Profile" />
          </a>
        </div>
        <div className="card grid h-30 grow place-items-end">
          <h1 className="body">Sophia Thomas</h1>
          <p className="paragraph">{ }</p>
        </div>
      </div >
    </>
  )
}
export default App
