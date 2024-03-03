import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import Reset from './page/Reset'
import PrivateRoutes from './routes/PrivateRoutes'

function App() {

  return (
   <Router>
    <div>
      <Routes>
        <Route element={<PrivateRoutes/>}>
           <Route path='/home' element={<Home/>}/>
           <Route path='/' element={<Home/>} exact />
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
   </Router>
  )
}

export default App
