import img from "./assets/login.jpg"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {

    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    function handleUIput(evt) {
        setEusername(evt.target.value)
    }

    function handlePIput(evt) {
        setEpassword(evt.target.value)
    }

    function addUser()
    {
       setusers([...users,{username:eusername,password:epassword}])
       navigate("/")
    }


    return (
        <div>
            <img className="w-screen h-screen absolute" src={img}></img>
            <div className="flex items-center justify-center w-screen h-screen relative">
                <div className="relative bg-white/35 p-12 rounded-xl shadow-lg text-center">
                    <h1 className="font-extrabold text-2xl font-sans p-4">Welcome !!!</h1>
                    <p>Sign up here :)</p>
                    <input onChange={handleUIput} className="p-2 m-2 rounded-md w-60 text-sm " type="email" placeholder="Username"></input><br></br>
                    <input onChange={handlePIput} className="p-2 m-2 rounded-md w-60 text-sm" type="password" placeholder="Password"></input><br></br>
                    <input className="p-2 m-2 rounded-md w-60 text-sm" type="password" placeholder="Confirm Password"></input><br></br>
                    <button onClick={addUser} className="bg-blue-500 mt-2 px-24 py-1 rounded-lg text-white border-solid border-white border-2">Sign Up</button>
                    <p className="text-sm font-semibold mt-2">All ready have an account?</p>
                    <p><Link to={"/"} className="text-sm font-semibold underline">Login</Link></p>
                </div>
            </div>

        </div>
    )
}

export default Signup;