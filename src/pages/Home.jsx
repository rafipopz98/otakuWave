import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Popular from '../components/Popular/Popular'
import Preloader from '../components/Preloader/Preloader'
import Marquees from '../components/Marquee/Marquees'
import Weekly from '../components/Weekly/Weekly'

const Home = () => {
  return (
    <div>
    {/* <Preloader /> */}
        {/* <Navbar /> */}
        <Slider />
        <Popular />
        <Marquees />
        <Weekly />
    </div>
  )
}

export default Home