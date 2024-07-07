import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Login from './components/Login';
import Signin from './components/Signin';
import Home from './components/Home';
import Profile from "./components/Profilepage";
import Post from "./components/Post";
import PostInteraction from "./components/PostInteraction";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/post' element={<Post />} />
          <Route path='/postinteraction' element={<PostInteraction />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;