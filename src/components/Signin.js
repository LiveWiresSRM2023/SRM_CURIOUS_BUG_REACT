import logo from '../assets/images/logo.png'; 
import googleLogo from '../assets/images/google-icon.png';


import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth, provider } from '../configuration/firebase';
import { signInWithPopup } from 'firebase/auth';
import Login from './Login';
import APP from './Login';



const Signin = () => {

  const [value, setValue] = useState("");
  const [uid, setUid] = useState(""); // New state to hold UID

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      setUid(data.user.uid); // Capture the UID
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("uid", data.user.uid); // Store UID in localStorage
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
    setUid(localStorage.getItem('uid')); // Retrieve UID from localStorage
  }, []);


  return (

    <div>
      {value ? <APP uid={uid} /> :
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <img src={logo} alt="Logo" className="h-32 mx-auto mt-20 mb-12" />
        <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          Explore, share and ignite your<br />new research
        </h4>
        
        <p className="text-sm mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
          "Dive into the Depths of Discovery: Unleash the<br /> Power of Research at your Fingertips"
        </p>
        
        <h6 className="text-lg font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          Sign In with Google
        </h6>
        <button className="mx-auto py-2 px-8 flex items-center justify-center  rounded-full text-white text-base mt-4 mb-12" onClick={handleClick} style={{ backgroundColor: '#DE9A3A', fontFamily: 'Inter, sans-serif' }}>
          <img src={googleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
          Google
        </button>
      </div>
    </div>
      }
    </div>
  );
};

export default Signin;
