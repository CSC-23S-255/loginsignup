import React from 'react'


const Signup=({clickfunc})=> {
  return (
    <div style={{border:"2px solid black ",display:"flex",backgroundcolor:"whitesmoke",marginLeft:"300px"}}>

      <div style={{textAlign:"center"}}>
        <h2 style={{color:"blue"}}>SIGNUP PAGE </h2><br /><br />
        <input style={{fontSize:"20px",padding:"5px",borderTop:"0px",borderLeft:"0px",borderRight:"0px" ,marginLeft:"10px"}} type="text" placeholder='your name' /> <br /><br />
        <input style={{fontSize:"20px",padding:"5px",borderTop:"0px",borderLeft:"0px",borderRight:"0px",marginLeft:"10px"}} type="email" placeholder='Email' /><br /><br />
        <input style={{fontSize:"20px",padding:"5px",borderTop:"0px",borderLeft:"0px",borderRight:"0px",marginLeft:"10px"}} type="password" placeholder='password' /><br /><br />
        <input style={{fontSize:"20px",padding:"5px",borderTop:"0px",borderLeft:"0px",borderRight:"0px",marginLeft:"10px"}} type="password" placeholder='retype your password' /><br /><br />
        <input type="checkbox" /><u>accept all trems and conditions</u><br /><br /><br />


        <button style={{color:"blue" ,fontSize:"20px",backgroundColor:"lightblue"}}>Register</button> <br /><br />
        
      </div>
       <div style={{textAlign:"center"}}>
          <img style={{width:"600px"}} src="https://static.vecteezy.com/system/resources/previews/003/689/231/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" /> <br /><br />
          <a style={{fontSize:"20px"}} href="#" onClick={clickfunc}><u>Already have an account</u></a><br /><br />
       </div>




      
    </div>
  )
}

export default Signup
