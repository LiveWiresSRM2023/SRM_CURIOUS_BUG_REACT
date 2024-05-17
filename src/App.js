import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/Login.js';


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
    </div>
  )
}

export default App