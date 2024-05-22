import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Login.js';
import Profile from "./components/Profilepage.js";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          
          <Route exact path='/login' Component={Login} />
          <Route exact path='/profile' Component={Profile} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App