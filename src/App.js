<<<<<<< HEAD

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Login';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          
          <Route exact path='/login' Component={Login} />
         
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
=======
import React from "react"
const App = () => {
  return (
    <div>
      
>>>>>>> 7223887bfc0da615c65f39ae3922bf16ac4553a2
    </div>
  )
}

export default App