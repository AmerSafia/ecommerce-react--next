import React from 'react'
import { client } from '../lib/client'
import Product from '../components/Product';
import FooterBanner from '../components/FooterBanner';
import Banner from '../components/Banner';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <Banner banner={bannerData.length && bannerData[1]} />
      <div className='products-heading'>
        <h2>
          best selling Products
        </h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      <FooterBanner FooterBanner={bannerData[1]} />
    </>
  )
}
export const getServerSideProps = async () => {
  const query = "*[_type=='product']"
  const products = await client.fetch(query)
  const bannerquery = "*[_type=='banner']"
  const bannerData = await client.fetch(bannerquery)
  return {
    props: { products, bannerData }
  }
}


export default Home