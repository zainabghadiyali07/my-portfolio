import React,{useState} from 'react'

 function Login() {
    const [login,setLogin]=useState("")
    const [password,setPassword]=useState("")
    const [loginErr,setLoginErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    function getFormData (e)
    {
        if(login.length<3 || password.length<3 )
        {
            alert("type correct value")
        }
        else
        {
            alert("All good :)")
        }
        
        e.preventDefault()
    }

    function userHandler (e){
        let item=e.target.value;
        if(item.length<3)    
        {
           setLoginErr(true)
        }
        else
        {
            setLoginErr(false)
        }
        setLogin(item)
    }
    function userPassword (e){
        let item=e.target.value;
        if(item.length<3)    
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)
    }

  return (
    <form onSubmit={getFormData}>
        <input type="text" placeholder='enter your id' onChange={userHandler}/>{loginErr?<span style={{color:"red"}}>User not valid</span>:""}<br /><br />
        <input type="password" placeholder='enter your password' onChange={userPassword}/>{passErr?<span style={{color:"red"}}>Password not valid</span>:""}<br /><br />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Login