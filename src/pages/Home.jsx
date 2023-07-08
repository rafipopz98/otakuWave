import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Popular from '../components/Popular/Popular'
import Preloader from '../components/Preloader/Preloader'
import Marquees from '../components/Marquee/Marquees'
import Weekly from '../components/Weekly/Weekly'
import TestNavbar from '../components/TestNavbar.jsx/TestNavbar'

const Home = () => {
  return (
    <div>
    {/* <Preloader /> */}
    <Slider />
        <Popular />
        <Marquees />
        <Weekly />
        {/* <TestNavbar /> */}
    </div>
  )
}

export default Home