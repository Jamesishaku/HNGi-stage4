import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import back from '../assets/back.svg'
import './sidebar.scss'

function Sidebar() {
  return (
      <div className='sidebar'>
          <img src={logo} alt="logo" />
          <div className='backContainer'>
            <Link to="/back"><img src={back} alt="logo" /></Link> Back
          </div>
      </div>
  )
}

export default Sidebar