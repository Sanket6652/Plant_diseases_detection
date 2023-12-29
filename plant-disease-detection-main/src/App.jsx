import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Community from './Pages/Community'
import APICalls from './Components/APICalls'
import Chatbot from './Components/Chatbot'
import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'
import { signOut } from "firebase/auth"
import { auth } from './Utils/Firebase'
import SingleCommunity from './Pages/SingleCommunity'
import Navbar from './Components/Navbar'

export default function App() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser)
  return (
    <>
      <Navbar />
      {currentUser && <button onClick={() => signOut(auth)}>Logout</button>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/communities' element={<Community />} />
        <Route path='community/:id' element={<SingleCommunity />} />
        <Route path='/api' element={<APICalls />} />
        <Route path='/chatbot' element={<Chatbot />} />
      </Routes>
    </>
  )
}