import React from 'react';
import './LandingPage.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import { ReactComponent as HeroImg} from '../../images/HeroImg.svg'
import MenuBar from '../../components/MenuBar/MenuBar';

const LandingPage = () => {
  return (
    <div className='Landing'>
        <NavBar />
        <div className='hero'>
          <HeroImg />
          <span className='heroSpan'>
          <div className='heroText'>
              <h1 className='Hero1'>Best food for your taste</h1>
              <p className='Hero2'>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div>
          <button className='btnHero1'>
                    Book A Table
          </button>
          <button className='btnHero2'>
            Explore Menu
          </button>
          </div>
          </div>
          </span>
        </div>
        <MenuBar />
        <Footer />
      
    </div>
  )
}

export default LandingPage
