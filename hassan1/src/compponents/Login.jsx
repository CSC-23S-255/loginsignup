import React from 'react'

const Login=({clickfunc})=> {
  return (
    <div style={{border:"2px solid black",display:"flex",backgroundcolor:"whitesmoke",marginLeft:"300px"}}>
      
      
      <div style={{textAlign:"center"}}>
         <h2 style={{color:"blue"}}>WELLCOME TO LOGIN PAGE</h2> <br /> <br />
        <input style={{fontSize:"30px",padding:"10px",borderTop:"0px",borderLeft:"0px",borderRight:"0px",marginLeft:"10px"}} type="email" placeholder='Email' /><br /> <br />
        <input style={{fontSize:"30px",padding:"10px",borderTop:"0px",borderLeft:"0px",borderRight:"0px",marginLeft:"10px"}} type="password" placeholder='password' /><br /> <br />
        <a style={{fontSize:"20px"}} href="#">Forget password</a><br /><br /><br />
        <button style={{color:"blue", fontSize:"20px",backgroundColor:"lightblue"}}>Login IN</button> <br /><br />
       
      </div>
        <div style={{textAlign:"center"}}>
        <img  src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=sph" alt="" /> <br /><br />
        <a style={{fontSize:"20px"}} href="#" onClick={clickfunc}><u>Create an account</u></a> <br /><br /><br />
        </div>

      
     
    </div>
  )
}

export default Login
