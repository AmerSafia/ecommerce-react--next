import React from 'react'
import {AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Headphone All rights reserved</p>
      <p className='icons'>
        <AiOutlineInstagram/>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer