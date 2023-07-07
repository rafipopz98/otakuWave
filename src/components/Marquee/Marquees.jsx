import React from 'react'
import Marquee from 'react-fast-marquee'
import './Marquees.css'
const Marquees = () => {
  return (
    <div className='mainMarqu'>
    <div className="titlemarqu">
      <h1>
        Animes We Provide
      </h1>
    </div>
      <Marquee  style={{backgroundColor:'rgba(0,0,0,0.1)'}}  autoFill='true' speed='100' delay='3' pauseOnClick='true' gradient='true'  gradientColor='255,45,25' gradientWidth='2rem' >
      <div className='marqueesimg image-wrapper'>
        <img src="https://www.pngitem.com/pimgs/m/622-6228786_one-piece-anime-banner-hd-png-download.png" alt="860x319" />
      </div>
      <div className='marqueesimg image-wrapper'>
        <img src="https://i.pinimg.com/originals/28/ef/40/28ef40e53d0036c906c3f7ce5445754f.jpg" alt="" />
      </div>
      <div className='marqueesimg image-wrapper'>
        <img src="https://i.pinimg.com/originals/5b/26/26/5b262629a153363a7f0e150a6ca9dffb.png" alt="" />
      </div>
      <div className='marqueesimg image-wrapper'>
        <img src="https://pm1.aminoapps.com/7445/3028ff5eec9c522bedbf98d946ea29a9b638dfb9r1-1975-853v2_uhq.jpg" alt="" />
      </div>
      <div className='marqueesimg image-wrapper'>
        <img src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1560206240877-I1U1M5D9XSSS16Y1Z6UX/image-asset.jpeg" alt="" />
      </div>

      
      </Marquee>
    </div>
  )
}

export default Marquees