import React from 'react'
import './MenuBar.css'
import MenuCard from '../MenuCard/MenuCard'

const MenuBar = () => {
    return (
        <div className='menuWrap'>
            <div className='menuHead'>
                <h1>
                    Browse Our Menu
                </h1>
            </div>
            <div>
                <MenuCard />
            </div>
        </div>
    )
}

export default MenuBar
