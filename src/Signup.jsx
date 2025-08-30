import img from "./assets/images/netflix.jpg"
import { BrowserRouter, Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()

    const [eusername, setEusername] = useState("")
    const [error, setError] = useState("")

    const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    }

    function handleUIput(evt) {
        setEusername(evt.target.value)
        setError("")
    }


    function addUser() {

        if (!eusername) {
            setError("⚠️ Email is required!")
            return
        }


        // Check if username already exists
        const exists = users.some(user => user.username === eusername)
        if (exists) {
            setError("⚠️ Username already exists! Please use another one.")
            return
        }

        if (!validateEmail(eusername)) {
      setError("Please enter a valid email address.");
      return;
    }

        // If all checks pass, register user
        setusers([...users, { username: eusername }])
        navigate("/PasswordConfirmation", { state: { username: eusername } });
    }

    return (
        <div>
            <img className="w-screen h-auto absolute" src={img}></img>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative">
                <header className="relative">
                    <div className="relative ml-14 flex justify-between">
                        <svg className="relative" xmlns=" http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#F44336" d="M5 18c.7 0 1.3 0 2 0 0 4.1 0 8.1 0 12.2-.8.1-1.6.2-2.3.3-1-2.5-2.7-6.8-2.7-6.8S2 28 2 30.8c.4 0-.2 0-2 .3 0-4.3 0-8.7 0-13 .8 0 2 0 2 0l3 7.3C5 25.4 5 20.8 5 18zM14.7 20c0-.6 0-1.4 0-2-1.9 0-3.8 0-5.7 0 0 4 0 8 0 12 1.9-.2 3.8-.4 5.7-.6 0-.6 0-1.4 0-2-1.2.1-2.4.1-3.7.4 0-1.1 0-1.7 0-2.8.9 0 2.1 0 3 0 0-.6 0-1.4 0-2-.9 0-2.1 0-3 0 0-1.1 0-1.9 0-3C11.6 20.1 14.2 20.1 14.7 20zM16 20c.1 0 1.9 0 2 0 0 3.2 0 6 0 9.2.7 0 1.3 0 2-.1 0-3.2 0-5.9 0-9.1.7 0 1.3 0 2 0 0-.6 0-1.4 0-2-2.1 0-3.9 0-6 0C16 18.6 16 19.4 16 20zM28.6 18c-1.9 0-3.7 0-5.6 0 0 3.8 0 7.2 0 11 .2 0 .4 0 .6 0 .4 0 .9 0 1.4 0 0-1.6 0-2.4 0-4 .1 0 2.4 0 2.7 0 0-.6 0-1.4 0-2-.3 0-2.6 0-2.7 0 0-1 0-2 0-3 .2 0 3.1 0 3.6 0C28.6 19.5 28.6 18.6 28.6 18zM32 27.5c0-3.3 0-6.2 0-9.5-.7 0-1.3 0-2 0 0 3.8 0 7.4 0 11.2 1.8.1 3.6.2 5.4.4 0-.6 0-1.3 0-1.9C34.3 27.6 33.1 27.5 32 27.5zM37 29.7c.7.1 1.3.1 2 .2 0-4 0-7.9 0-11.9-.7 0-1.3 0-2 0C37 22 37 25.8 37 29.7zM45.4 24.2c.9-2 1.7-4 2.6-6.1-.7 0-1.5 0-2.2 0-.5 1.3-.9 2.2-1.4 3.4-.5-1.3-.8-2.2-1.3-3.4-.7 0-1.5 0-2.2 0 .8 2 1.5 4 2.4 6.1-.9 2-1.7 4-2.6 6 .7.1 1.4.2 2.1.3.5-1.3 1-2.2 1.5-3.5.5 1.4 1 2.4 1.5 3.8.7.1 1.6.2 2.3.3C47.1 28.7 46.2 26.3 45.4 24.2z"></path>
                        </svg>

                        <button ><Link to={"/"} className="mr-20 bg-[#E50914] text-base font-semibold rounded-md px-5 py-2 text-white">Sign In</Link></button>
                    </div>
                </header>
            </div >
            <div className="flex items-center justify-center w-screen h-screen relative">
                <div className="mb-36">
                    <p className="font-extrabold text-6xl font-sans text-white p-4">Unlimited movies, TV <br></br><span className="ml-16">shows, and more</span></p>
                    <p className="ml-48 text-white text-xl font-semibold">Starts at USD 2.99. Cancel anytime.</p>
                    <p className="ml-24 mt-10 text-white text-base font-semibold">Ready to watch? Enter your email to create or restart your membership.</p>
                    {error && <p className="text-red-600 font-bold">{error}</p>}
                    <div className="flex">
                        <input onChange={handleUIput} className="p-4 m-1 rounded-md w-96 text-base bg-black/50 border-green-900 border-2 focus:border-white focus:border-2 text-white " placeholder="Email address"></input><br></br>
                        <button onClick={addUser} className="bg-[#E50914] m-1 px-12 rounded-lg text-white border-solid text-2xl font-semibold">Get Started</button>
                        
                    </div>
                </div>
            </div>

            <div className="bg-[#161616]">


                <div className="p-20">
                    <p className="text-[#BABABA] py-3">Questions? Contact us.</p>
                    <div className="flex text-[#BABABA] justify-between underline">
                        <p>FAQ</p>
                        <p>Help Center</p>
                        <p>Terms of Use</p>
                        <p>Privacy</p>
                    </div>

                    <div className="flex text-[#BABABA] mt-5 gap-64 underline">
                        <p>Cookie Preference</p>
                        <p>Corporate Information</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
