import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import postImg from '../assets/images/post.png';
import Profile from '../assets/images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const PostInteraction = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 500);
  }, []); 

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-yellow-900 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-900 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-900 rounded-full"></div>
        </div>
        <p className="ml-2 text-yellow-900">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div>

      </div>

      <div>

      </div>
      
    </div>
  );
};

export default PostInteraction;
