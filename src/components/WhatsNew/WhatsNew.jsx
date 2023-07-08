import React from 'react'
import  './WhatsNew.css'
import Slider from '../Slider/Slider'

const WhatsNew = () => {
  return (
    <div className='whatsnew'>
        <h1>Whats new</h1>
        <div className='slid'>

        <Slider className="sli" />
        </div>
    </div>
  )
}

export default WhatsNew