import React, { useState } from 'react';
import Login from './compponents/Login';
import Signup from './compponents/Signup';



const App = () => {
  const [isloggedin, setLoggedin] = useState(true);

  const toggle= ()=>{
    setLoggedin(!isloggedin);
  }

  return (
    <div>
      {
       
       isloggedin?<Login clickfunc={toggle}/>: <Signup clickfunc={toggle}/>
      }
    </div>
  )
}

export default App
