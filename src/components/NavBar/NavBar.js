import React from 'react'
import './NavBar.css'
import { ReactComponent as Call } from '../../images/Call.svg'
import { ReactComponent as Mail } from '../../images/Mail.svg'
import { ReactComponent as Twitter } from '../../images/Twitter.svg'
import { ReactComponent as Facebook } from '../../images/Facebook.svg'
import { ReactComponent as Insta } from '../../images/Insta.svg'
import { ReactComponent as Github } from '../../images/Github.svg'
import HeadLogo from '../../images/HeadLogo.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='topbar'>
            <div className='info'>
                <Call className='img'/>
                <span className='word'>+2349067813147</span>
                <Mail className='img'/>
                <a href='mailto:ikareemabiodun730@gmail.com' target='_blank' rel="noreferrer" className='word'>
                    ikareemabiodun730@gmail.com</a>
                <div className='social'>
                    <a className ='pic' href='www.twitter.com' target='_blank' rel="noreferrer"> <Twitter /> </a>
                    <a className ='pic' href='www.facebook.com' target='_blank' rel="noreferrer"> <Facebook /> </a>
                    <a className ='pic' href='www.instagram.com' target='_blank' rel="noreferrer"> <Insta /> </a>
                    <a className ='pic' href='www.github.com' target='_blank' rel="noreferrer"> <Github /> </a>
                </div>
            </div>
            <div className='header'>
                <div className='head'>
                <img src={HeadLogo} alt='no Head Logo' style={{marginTop:'15px'}} />
                <h1 className='logoN'>  Bistro Bliss </h1>
                <ul className='listH'>
                    <li className='list'>Home</li>
                    <li className='list'>About</li>
                    <li className='list'>Menu</li>
                    <li className='list'>Pages</li>
                    <li className='list'>Contact</li>
                </ul>
                <button className='btn'>
                    Book A Table
                </button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default NavBar
