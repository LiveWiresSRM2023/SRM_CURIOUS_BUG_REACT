import React, { useState,useEffect } from 'react'
import Logo from "../assets/images/logo.png"
import logo from "../assets/images/logo.png"
import notif from '../assets/icons/navpronot.png'
import message from '../assets/icons/navpromes.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import pic from "../assets/images/pfp.jpg"
import { useActionData, useNavigate } from 'react-router-dom'
import { firestore,auth } from "../configuration/firebase";

const Navbar = () => {
  const [photoURL, setPhotoUrl] = useState('');
  const navigate = useNavigate();

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
  return (

<div className="w-[100%] bg-white h-[65px] flex items-center justify-around ">
      <img onClick={()=>{  navigate("/home")}} src={logo} alt="" className="h-[50px] w-[100px]" />
      <div className="bg-[#F4F4F4] pl-[10px] pr-[15px] rounded-[25px] border-[#DE9A3A] border-[1px]">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" className="w-[600px] h-[40px] bg-[#F4F4F4] pl-[5px] focus:border-none focus:outline-none" placeholder="Search Curious Bees"/>
      </div>
      <button className="bg-[#DE9A3A] rounded-[30px] w-[90px] h-[35px] text-[13px]">Create +</button>
      <img src={notif} alt="" className="h-[25px] w-[25px]"/>
      <img src={message} alt="" className="h-[30px] w-[30px]" />
      <div  onClick={()=>{  navigate("/profile")}} className="flex items-center gap-2">
      <img src={photoURL} alt=""  className="h-[30px] w-[30px] rounded-[50%] object-cover" />
      <FontAwesomeIcon icon={faChevronDown} />
      </div>
   </div>


    // <div>
        
    // <nav className='flex  items-center md-w-full h-24 justify-between'>
    //     <div className=''> 
    //         <img className='h-16 w-16 m-8' src= {Logo} alt=''/>
    //     </div>

    //     <div>
    //     <form>   
    //         <div class="flex w-96 text-sm  mx-auto border-2 bg-white border-yellow-500 rounded-full focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 items-center justify-between p-1">
    //             <svg class="w-4 h-4 md:flex text-black ml-4 dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" >
    //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    //             </svg>
    //             <input type="search" className="text-sm focus:outline-none focus:ring-0" id="default-search" placeholder="Search Mockups, Logos..." required />
    //             <button type="submit" class="text-black end-2.5 rounded-full bottom-2.5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:border-yellow-400 font-medium text-sm px-4 py-2 dark:bg-yellow-500 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600">Search</button>
    //         </div>
    //     </form>
    //     </div>
    //     <div className='flex m-10 w-80 justify-between' >

    //         <div className='flex items-center w-56 justify-between p-5'>
    //             <button className="text-black end-2.5 bottom-2.5 bg-yellow-500 p-2 rounded-xl hover:bg-yellow-600">
    //                 <p className="flex">Create <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    //                     <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" /></svg>
    //                 </p>
    //             </button>
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //                 <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    //             </svg>
           
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //                 <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    //             </svg>
    //         </div>

    //         <img className='w-14 h-14 m-2 p-2 rounded-full border-2 border-yellow-500' src= {Logo} alt=''/> 

    //     </div>
    // </nav>
    // </div>
  )
}

export default Navbar



