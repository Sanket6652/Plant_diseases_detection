import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
        { name: 'Communities', href: '/communities' },
        { name: 'Bot', href: '/chatbot' },
    ]
    return (
        <nav className='py-4 mx-10'>
            <ul className="flex gap-4 flex-wrap mx-auto max-w-content">
                {navLinks.map((link, i) => (<li key={i}><NavLink to={link.href}>{link.name}</NavLink></li>))}
            </ul>
        </nav>
    )
}