import React, { useState } from 'react';
import Logo from '../../OLX.png';
import './Signup.css';

export default function Signup() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(username )

  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className="input"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text"
            id="username"
            name="name"
            defaultValue=""
          />
          <label htmlFor="email">Email</label>
          <input
            className="input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            defaultValue=""
          />
          <label htmlFor="phone">Phone</label>
          <input
            className="input"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            type="number"
            id="phone"
            name="phone"
            defaultValue=""
          />
          <label htmlFor="password">Password</label>
          <input
            className="input"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            defaultValue=""
          />
          <button >Signup</button>
        </form>
        <a href="#login">Login</a>
      </div>
    </div>
  );
}
