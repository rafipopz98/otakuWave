import  { useEffect } from 'react'
import preLoaderAnim from '../animation'
import  './Preloader.css'
const Preloader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, [])
    
  return (
   <div className="preloader">
    <div className="texts-container spantext">
        <span>Anime,&nbsp;</span>
        <span>Escape,&nbsp; </span>
        <span>Unleashed</span>
    </div>
   </div>
  )
}

export default Preloader