import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import './NavBar.css'
export const NavBar = () => {
  return (
    <div className='NavBar'>
        <img src="logo.svg" alt="itierra" />
        <div className='NavBar-SearchBar'><SearchBar/></div>
        <div>iconos</div>
    </div>
  )
}
