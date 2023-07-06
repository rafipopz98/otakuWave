import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
// import ScrollToTop from './components/ScrollToTop'
function App() {

  return (
    <>
    {/* <ScrollToTop/> */}
    <Router>
      <Routes>
        <Route exact path='/' element={<Signup/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
