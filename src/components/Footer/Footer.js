import React from 'react'
import './Footer.css';
import HeadLogo from '../../images/HeadLogo.svg';
import { ReactComponent as Twitter } from '../../images/Twitter.svg'
import { ReactComponent as Facebook } from '../../images/Facebook.svg'
import { ReactComponent as Insta } from '../../images/Insta.svg'
import { ReactComponent as Github } from '../../images/Github.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
        <img src={HeadLogo} alt='no Head Logo' />
        <h1 className='logoN' style={{color:'white'}}>  Bistro Bliss </h1>
        <p className='col'>
          In the new era of technology we look a in the future with certainty and pride to for our company and.
        </p>
                    <a className ='pic' style={{backgroundColor:'#ad343e'}} href='www.twitter.com' target='_blank' rel="noreferrer"> <Twitter /> </a>
                    <a className ='pic' style={{backgroundColor:'#ad343e'}} href='www.facebook.com' target='_blank' rel="noreferrer"> <Facebook /> </a>
                    <a className ='pic' style={{backgroundColor:'#ad343e'}} href='www.instagram.com' target='_blank' rel="noreferrer"> <Insta /> </a>
                    <a className ='pic' style={{backgroundColor:'#ad343e'}} href='www.github.com' target='_blank' rel="noreferrer"> <Github /> </a>
        </div>
        <div className='list1'>
          <ul>
            <h3>Pages</h3>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className='list1'>
        <ul>
          <h3>Utility Pages</h3>
            <li>Start Here</li>
            <li>Styleguide</li>
            <li>Password Protected</li>
            <li>404 Not Found</li>
            <li>Licence</li>
            <li>Changelog</li>
            <li>View More</li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer
