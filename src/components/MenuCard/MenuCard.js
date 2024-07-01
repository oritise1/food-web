import React from 'react'
import './MenuCard.css'
import {ReactComponent as BreakfastImg} from '../../images/BreakfastImg.svg';

const MenuCard = (props) => {
  return (
    <div>
          <div className='cards'>
            <BreakfastImg />
            <h3 className='h1text'> Breakfast </h3>
            <p className='texth3'> In the new era of technology we look in the future with certainty and pride for our life. </p>
            <a href='#menu' target='_blank' rel="noreferrer"> Explore Menu </a>
            </div>
    </div>
  )
}

export default MenuCard
