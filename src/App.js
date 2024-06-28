import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing.js";
import Login from './components/Login.js';
import Signin from './components/Signin.js';
import Home from './components/Home.js';
import Profile from "./components/Profilepage.js";
import Post from "./components/post.js";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/signin' element={<Signin />} />
           <Route path='/Home' element={<Home/>} />
           <Route exact path='/profile' Component={Profile} />
           <Route path="/post" element={<Post/>}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}
export default App;
