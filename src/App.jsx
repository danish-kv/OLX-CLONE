import React, { useCallback, useContext, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import CreatePage from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext';


function App() {
  const {user, setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
      <div>
        <Post>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={< LoginPage />} />
            <Route path='/create' element={< CreatePage />} />
            <Route path='/view' element={< ViewPost />} />
          </Routes>
        </Post>
      </div>
  );
}

export default App;