import React, { useState } from 'react'
import Button from './Button'

const Footer = ({ title, description, price, handleClick }) => {
    return (
        <>
        <div className='card' onClick={()=>{handleClick(`parent to child`)}}>

            <h3>{title}</h3>
            <p>{description}</p>
            <p>Rs: {price}</p>
        </div>
            <Button title="click" bgcolor="purple" color="white"  />
        </>
    )
}

export default Footer