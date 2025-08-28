import React, { use } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Landing from './Landing';
import './index.css';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App()
{

   const [users,setusers] = useState(

    [
        {
            username:"kibo",
            password:"1234"
        }
    ]
   )

   return( <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/Signup' element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path='/Landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>)
}


root.render(
  <App/>
);

