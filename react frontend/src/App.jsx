/* import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
 */

/* import './App.css'
import { useState } from "react"
import { useEffect } from 'react'

const App =()=>{
  const [counter,setCounter] =useState(0);
  const [color,setColor]=useState("black");
  const[textColor,setTextColor]=useState("white"); 

  const increementCounter = ()=>{
    setCounter((prev)=>prev+1)
    setColor("lightgreen")
    setTextColor("darkgreen")
  }
  const  decreementCounter=()=>{
    setCounter((prev)=>prev-1)
     setColor("lightcoral")
    setTextColor("darkred")
  }
  const multiplyCounter=()=>{
    setCounter((prev)=>prev*2)
    setColor("lightblue")
    setTextColor("darkblue")
  }
  const divisionCounter=()=>{
    setCounter((prev)=>prev/2)
    setColor("plum")
    setTextColor("purple")
  }
  const resetCounter=()=>{
    setCounter(0)
    setColor("black")
    setTextColor("white")
  }


  return(
    <div class='container'>
      <h1>COUNTER APP</h1>
      <div class="counter-box" style={{backgroundColor: color,color: textColor}}>COUNTER : {counter}</div>
      <button class="a" onClick={increementCounter}>Addition</button>
      <button class="b" onClick={decreementCounter}>Subtraction</button>
      <button class="c" onClick={multiplyCounter}>Multiplication</button>
      <button class="d" onClick={divisionCounter}>Division</button>
      <button class="e" onClick={resetCounter}>Reset</button>

    </div>
  )
}
 */

import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  const [loader,setLoader] = useState(false)
  const [error,setError] = useState("")


  useEffect(()=>{

    let ignore = false;
    const load=async()=>{
      setLoader(true);setError("") 
    
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      console.log(res,"Response Fetched")
      if(res.ok || res.status==200){
        const data = await res.json();
        console.log(data,"data");
        setUser(data)

      }
      else{
        throw new Error(`Status ${err.status}`)
      }
    }
    catch(e){

    }
    finally{
      if(!ignore) setLoader(false)
    
    }
  }
  load();
  return()=>{
    ignore=true;
  }

  },[])
  return <>
  {loader?<>Page is Loading</>:<>
    <header>User Listed Below:</header>
    {user?.map((element,index)=><div key={index}>
      <div class="details">
      <center>Id:{element.id}</center>
       <center> Name:{element.name}</center>
       <center> Username:{element.username}</center>
      <center>Email:{element.email}</center>
        <center>Address:{element.address.street},{element.address.suite},{element.address.city},{element.address.zipcode},{element.address.geo.lat},{element.address.geo.lng}</center>
      <center>Phone:{element.phone}</center>
      <center>Website:{element.website}</center>
       <center>Company:{element.company.name}, {element.company.catchPhrase}, {element.company.bs}</center>
       </div>
      </div>)}
      </>}

  
  </>
}
  
export default App




