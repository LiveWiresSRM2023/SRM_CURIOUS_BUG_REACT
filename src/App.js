import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing.js";
import Login from './components/Login.js';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/landing' element={<Landing />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
