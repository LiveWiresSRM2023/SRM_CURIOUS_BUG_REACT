import {auth } from "../configuration/firebase";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png';
import notif from '../assets/icons/navpronot.png';
import message from '../assets/icons/navpromes.png';
import Post from "./Post";

const Navbar = () => {
  const [photoURL, setPhotoUrl] = useState('');
  const navigate = useNavigate();
  
  // const openCreatePost = () => {
  //   navigate('/post');
  // };

  useEffect(() => {
    const fetchdata = auth.onAuthStateChanged((user) => {
      if (user) {
        setPhotoUrl(user.photoURL);
      } else {
        setPhotoUrl('');
      }
    });

    return () => fetchdata();
  }, []);

  const [OpenPost , setOpenPost] = useState(false)
  const [Colour , setColour] = useState(false)

  const colourchange = () => {
     if (window.scrollY >= 5 ) {
       setColour(true)
     }
     else {
       setColour(false)
     }
  }

window.addEventListener('scroll', colourchange)

  return (

   <div className="pt-[65px]">
<div className= {`w-[100%] bg-white h-[65px] flex items-center justify-between fixed top-0 ${Colour? "bg-sky-50" : "bg-white"}`}>
{OpenPost && <Post onClose = {() => setOpenPost(false)} />}
      <div className="pl-4" onClick={()=>{navigate("/home")}}>
      <img src={logo} alt="" className="h-[50px] w-[100px]" />
      </div>
      <div className="bg-[#F4F4F4] pl-[10px] pr-[15px]">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" className="w-[620px] h-[40px] bg-[#F4F4F4] pl-[5px] focus:border-none focus:outline-none" placeholder="Search "/>
      </div>
      <div className="flex items-center gap-4 pr-4 ">
         <button onClick={() => setOpenPost(true)} className="bg-black text-white font-bold rounded-[30px] w-[100px] h-[35px] text-[15px]">Create +</button>
         <img src={notif} alt="" className="h-[25px] w-[25px]"/>
         <img src={message} alt="" className="h-[30px] w-[30px]" />
         <div className="flex items-center gap-2" onClick={()=> {navigate("/profile")}}>
         <img src={photoURL} alt="" className="h-[30px] w-[30px] rounded-[50%] object-cover" />
         <FontAwesomeIcon icon={faChevronDown} />
         </div>
      </div>
   </div>
   </div>
















    // <div className="w-full bg-white h-16 flex items-center justify-around">
    //   <img 
    //     onClick={() => navigate('/home')} 
    //     src={logo} 
    //     alt="Logo" 
    //     className="h-12 w-24 cursor-pointer" 
    //   />
    //   <div className="bg-gray-200 pl-2.5 pr-3.5 rounded-full border border-yellow-500 flex items-center">
    //     <FontAwesomeIcon icon={faMagnifyingGlass} />
    //     <input 
    //       type="text" 
    //       className="w-96 h-10 bg-gray-200 pl-1.5 focus:outline-none" 
    //       placeholder="Search Curious Bees" 
    //     />
    //   </div>
    //   <button className="bg-yellow-500 rounded-full w-24 h-9 text-sm" onClick={openCreatePost}>
    //     Create +
    //   </button>
    //   <img 
    //     src={notif} 
    //     alt="Notifications" 
    //     className="h-6 w-6" 
    //   />
    //   <img 
    //     src={message} 
    //     alt="Messages" 
    //     className="h-7 w-7" 
    //   />
    //   <div 
    //     onClick={() => navigate('/profile')} 
    //     className="flex items-center gap-2 cursor-pointer"
    //   >
    //     <img 
    //       src={photoURL || 'defaultProfilePicUrl'} // Replace with a default profile picture URL if needed
    //       alt="Profile" 
    //       className="h-7 w-7 rounded-full object-cover" 
    //     />
    //     <FontAwesomeIcon icon={faChevronDown} />
    //   </div>
    // </div>
  );
};

export default Navbar



