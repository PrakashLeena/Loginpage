import { useState } from "react";
import img from "./assets/login.jpg"
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'; 
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Login(props)
{

   const [eusername,setEusername] = useState()
   const [epassword,setEpassword] = useState()
   const [ruser,setRuser] = useState(true)

   const users = props.users
   const navigate = useNavigate()
   

   function handleUIput(evt)
   {
        setEusername(evt.target.value)
   }

   function handlePIput(evt)
   {
       setEpassword(evt.target.value)
   }


   function checkUser()
   {

       var userfound = false
       users.forEach(function(item)
    {
        if(item.username === eusername && item.password === epassword)
        {
            console.log("Login success full")
            userfound = true
            navigate("/Landing",{state:{user:eusername}})
        }
     })

        if(userfound===false)
        {
            console.log("Login failed")
            setRuser(false)
        }
    
   }


    return(<div> 
            <img className="w-screen h-screen absolute" src={img}></img>
            <div className="flex items-center justify-center w-screen h-screen relative">
            <div className="relative bg-gray-50/35 p-12 rounded-xl shadow-lg text-center">
                <h1 className="font-extrabold text-2xl font-sans p-4">Welcome !!!</h1>
                {ruser?<p>Login here :)</p>:<p className="text-red-700 font-bold">Please Signup before you Login!</p>}
                
                <input onChange={handleUIput} className="p-2 m-2 rounded-md w-60 text-sm " type="email" placeholder="Username"></input><br></br>
                <input onChange={handlePIput} className="p-2 m-2 rounded-md w-60 text-sm" type="password" placeholder="Password"></input><br></br>
                <button onClick={checkUser} className="bg-blue-500 mt-2 px-24 py-1.5 rounded-lg text-white border-solid border-white border-2">Login</button>
                <p className="text-sm font-semibold mt-2">Do you haven't account?</p>
                <p><Link to={"/Signup"} className="text-sm font-semibold underline">Register</Link></p>
                </div>
            </div>

        </div>)
}

export default Login;
