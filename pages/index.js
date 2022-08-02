import React from 'react'
import {Product,FooterBanner,Banner} from '../components/index'
const Home = () => {
  return (
    <>
      banner
      <div className='products-heading'>
        <h2>
          best selling Products
        </h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {['product1', 'product2'].map((ele) => {
          return <span>{ele}</span>
        }
        )}
      </div>
      footer
    </>
  )
}

export default Home