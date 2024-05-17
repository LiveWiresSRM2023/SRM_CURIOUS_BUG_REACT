import React from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  return (

    <div className='flex flex-col justify-center items-center h-[100vh] bg-[#F4F4F4]'>
      <div className='pb-10'>
      <img src={logo} className='h-[80px] w-[150px] ' alt="" />
      </div>

      <div className='p-1 flex flex-col '>
         <label htmlFor="" className='font-bold pb-2' >First name</label>
         <input className='w-[400px] h-[35px] rounded shadow-sm ' type="text" />
      </div>
         
      <div className='p-1 flex flex-col'>
         <label htmlFor="" className='font-bold pb-2'>Last name</label>
         <input className='w-[400px] h-[35px] rounded shadow-sm' type="text" />
      </div>

      <div className='p-1 flex flex-col'>
           <label htmlFor="" className='font-bold pb-2'>College</label>
           <input className='w-[400px] h-[35px] rounded shadow-sm' type="text" />
      </div>

      <div className='p-1 flex flex-col'>
         <label htmlFor="" className='font-bold pb-2'>Department</label>
         <input className='w-[400px] h-[35px] rounded shadow-sm' type="text" />
      </div>

      <div className='p-1 flex flex-col'>
           <label htmlFor="" className='font-bold pb-2'>Position</label>
           <input className='w-[400px] h-[35px] rounded shadow-sm' type="text" />
      </div>

      <div className='flex justify-center items-center p-3 gap-1'>
        <input type="checkbox" id='check' className='accent-[#DE9A3A]' />
        <label htmlFor="check" className='text-[13px]'>I agree to the Terms of Service and acknowledge the privacy policy</label>
        
      </div>

      <button className='w-[400px] h-[35px] rounded bg-[#DE9A3A] font-bold' >Continue</button>
    </div>

    
  )
}

export default Login