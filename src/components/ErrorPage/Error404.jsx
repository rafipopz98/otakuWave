import React from 'react'
import './Error404.css'
import gif from '../../assets/images/error.gif'
import { Link } from 'react-router-dom'
const Error404 = () => {
  return (
    <div className="errorcontainer">
      <div className="errorgif">
        <img src={gif} alt="gif_ing" />
      </div>
      <div className="erroecontent">
        <h1 className="error-main-heading">This page is gone.</h1>
        <p className='paraerroe'>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <Link to="/" target="blank">
          <button className='errorhome'>Back to home</button>
        </Link>
      </div>
    </div>
  )
}

export default Error404