import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Popular from './components/Popular'
// import ScrollToTop from './components/ScrollToTop'
function App() {

  return (
    <>
    {/* <ScrollToTop/> */}
    <Router>
    {/* <Navbar /> */}
    {/* <Slider /> */}
      <Routes>
        <Route exact path='/' element={<Popular/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
