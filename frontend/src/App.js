import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Community from "./Pages/Community";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SingleCommunity from "./Pages/SingleCommunity";
import { ImageUpload } from "./home";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import SimpleChatbot from "./Pages/Chatbot";

function App() {
const navLinks = [ { name: 'Home', href: '/' },
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'Communities', href: '/communities' },
    { name: 'Bot', href: '/chatbot' },
  ]
  const currentUser  = useContext(AuthContext);
  return (
    <BrowserRouter>
    <nav>
      <ul>
      {navLinks.map((link, i) => (<li key={i}><NavLink to={link.href}>{link.name}</NavLink></li>))}
      </ul>
    </nav>
      <Routes>
        <Route path='/' element={ <ImageUpload /> } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/communities' element={<Community />} />
            <Route path='community/:id' element={<SingleCommunity />} />
            {/* <Route path='/api' element={<APICalls />} /> */}
      </Routes>
      <SimpleChatbot />
  </BrowserRouter>
  );
}

export default App;
