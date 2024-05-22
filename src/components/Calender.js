import React from 'react'
import Img from '../assets/images/landing_img.png';

const Feed = () => {
  return (
    <div>
      <div className='flex w-screen h-full'>

        <div className='w-1/4 h-full p-1'>

            <div className='container border rounded-lg'>

                <div className='flex m-5 p-5 rounded-md font-bold gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                 </svg> Home
                </div>
                <div className='flex m-5 p-5 rounded-md font-bold gap-2'>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                </svg> Event
                    
                </div>
                <div className='flex m-5 p-5 rounded-md font-bold  bg-slate-600  text-yellow-500 gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg> Calender
                </div>
            </div>

            <div className='container border mt-1 rounded-lg'>
                <h1 className='m-5 font-bold'>
                    Followed Hashtags
                </h1>

                <div className='container ml-4'>
                    <div className='flex m-5 gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg> Science
                    </div>
                    <div className='flex m-5 gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>UI
                    </div>
                    <div className='flex m-5 gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg> User Experience
                    </div>
                    <div className='flex m-5 gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg> Python
                    </div>
                    <div className='flex m-5 gap-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg> SRMIST
                    </div>  
                </div>
            </div>

            <div className='container border rounded-lg mt-1'>
                <h1 className='m-5 font-bold'>
                    Latest Research
                </h1>
                <div className='h-56 overflow-scroll scrollbar-hide whitespace-nowrap'>
                <div className='container ml-1'>
                    <div className='flex m-2 gap-2 items-center border rounded-md p-2'>
                        <img src={Img} alt='' className='w-20 rounded-md' ></img>
                        <div>
                            <h1 className='font-bold'>
                                Intgeration of AI in WebApp
                            </h1>
                            <p className='text-slate-400 text-sm'>
                                Empower the tech world with AI
                            </p>

                        </div>
                    </div>
                    <div className='flex m-2 gap-2 items-center border rounded-md p-2'>
                        <img src={Img} alt='' className='w-20 rounded-md' ></img>
                        <div>
                            <h1 className='font-bold'>
                                Intgeration of AI in WebApp
                            </h1>
                            <p className='text-slate-400 text-sm'>
                                Empower the tech world with AI
                            </p>

                        </div>
                    </div>
                    <div className='flex m-2 gap-2 items-center border rounded-md p-2'>
                        <img src={Img} alt='' className='w-20 rounded-md' ></img>
                        <div>
                            <h1 className='font-bold'>
                                Intgeration of AI in WebApp
                            </h1>
                            <p className='text-slate-400 text-sm'>
                                Empower the tech world with AI
                            </p>

                        </div>
                    </div>
                    <div className='flex m-2 gap-2 items-center border rounded-md p-2'>
                        <img src={Img} alt='' className='w-20 rounded-md' ></img>
                        <div>
                            <h1 className='font-bold'>
                                Intgeration of AI in WebApp
                            </h1>
                            <p className='text-slate-400 text-sm'>
                                Empower the tech world with AI
                            </p>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className='bg-slate-300 border border-yellow-300 w-3/5 h-full'>

            <p> Hello World</p>

        </div>

        <div className='bg-slate-300 border border-yellow-300 w-1/4 h-full'>
        
            <p> Hello World</p>

        </div>
      </div>
    </div>
  )
}

export default Feed
