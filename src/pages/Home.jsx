import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Popular from '../components/Popular/Popular'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <Popular />
    </div>
  )
}

export default Home