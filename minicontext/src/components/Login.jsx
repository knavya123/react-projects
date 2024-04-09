import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [u, setU] = useState('')
    const [p, setP] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({u, p})
    }
    

    return (

        <div>
        <h2>Login</h2>
        <input 
        type="text"
        value={u}
        onChange={(e) => setU(e.target.value)}
        placeholder='Username'
        />
        {" "}
        <input
        type="password" 
        value={p}
        onChange={(e) => setP(e.target.value)}
        placeholder='Password'
        />
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login