import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../OLX.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate() 
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit = (e)=>{
    e.preventDefault()    
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      alert('Logged In');
      navigate('/')
    }).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className="input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            
          />
          <label htmlFor="password">Password</label>
          <input
            className="input"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
          />
          <button>Login</button>
        </form>
        <a href="#signup">Signup</a>
      </div>
    </div>
  );
}

export default Login;
