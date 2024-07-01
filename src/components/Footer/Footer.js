import React from 'react'
import './Footer.css';
import HeadLogo from '../../images/HeadLogo.svg';
import { ReactComponent as Twitter } from '../../images/Twitter.svg'
import { ReactComponent as Facebook } from '../../images/Facebook.svg'
import { ReactComponent as Insta } from '../../images/Insta.svg'
import { ReactComponent as Github } from '../../images/Github.svg'
import { ReactComponent as Footer1 } from '../../images/FooterImg1.svg'
import { ReactComponent as Footer2 } from '../../images/FooterImg2.svg'
import { ReactComponent as Footer3 } from '../../images/FooterImg3.svg'
import { ReactComponent as Footer4 } from '../../images/FooterImg4.svg'

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
            <li className='list2'>Home</li>
            <li className='list2'>About</li>
            <li className='list2'>Menu</li>
            <li className='list2'>Pricing</li>
            <li className='list2'>Blog</li>
            <li className='list2'>Contact</li>
            <li className='list2'>Delivery</li>
          </ul>
        </div>
        <div className='list1'>
        <ul>
        <h3>Utility Pages</h3>
            <li className='list2'>Start Here</li>
            <li className='list2'>Styleguide</li>
            <li className='list2'>Password Protected</li>
            <li className='list2'>404 Not Found</li>
            <li className='list2'>Licence</li>
            <li className='list2'>Changelog</li>
            <li className='list2'>View More</li>
          </ul>
        </div>
        <div>
          <h3 style={{color:'#fff'}}>
            Follow Us On Instagram
          </h3>
          <div className='foot'>
              <div><Footer1 style={{borderRadius:'7%'}} /></div>
              <div><Footer2 /></div>
              <div><Footer3 /></div>
              <div><Footer4 style={{borderRadius:'5%'}} /></div>
          </div>
        </div>
        </div>
        <div style={{width:'95%',height:'1px', backgroundColor:'#414536', marginTop:'90px'}}></div>
        <p className='copy'> Copyright &copy; 2023 Hashtag Developer. All Rights Reserved</p>
    </div>
  )
}

export default Footer
