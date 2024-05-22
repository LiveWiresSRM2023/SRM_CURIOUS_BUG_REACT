import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing.js";
import Login from './components/Login.js';
import Signin from './components/Signin.js';
import Home from './components/Home.js';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/signin' element={<Signin />} />
           <Route path='/Home' element={<Home/>} />


        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
