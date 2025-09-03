import React, { useState, useEffect } from 'react'
import githubProfile from './assets/github.jpg'
import './App.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState("default");

  useEffect(() => {
    fetch('http://localhost:3000/') // <-- bakcend API URL
      .then(res => res.json())
      .then(data => setMessage(data.message2))
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="min-h-screen w-full border-e-indigo-400 flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {/* <a href="https://github.com/sophiarthomas">
            <img src={githubProfile} className="logo" alt="GitHub Profile" />
          </a> */}
    </div >
  )
}
export default App
