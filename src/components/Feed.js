import React from 'react'
import Img from '../assets/images/landing_img.png';
import Profile from '../assets/images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { TECarousel, TECarouselItem } from "tw-elements-react";


const Feed = () => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (category) => {
        setSelected(category);
    };

  return (
    <div className='bg-[#d7d5d5]'>

    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

    <div className='flex w-screen fixed overflow-scroll scrollbar z-[-1] '>
            <div className='w-1/4 h-full p-1 '>
                
                    {[
                        { name: 'Business', icon: 'fa-briefcase' },
                        { name: 'Science', icon: 'fa-flask' },
                        { name: 'Law', icon: 'fa-gavel' }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center h-12 m-2 p-5 rounded-md font-semibold gap-0 text-base cursor-pointer ${
                                selected === item.name ? 'bg-gray-200 text-yellow-500' : ''
                            }`}
                            onClick={() => handleSelect(item.name)}
                        >
                            <i className={`fa-solid ${item.icon} w-6 h-4`}></i>
                            <span className="ml-1">{item.name}</span>
                        </div>
                    ))}

                    <hr className='my-4 border-black' />


                <h1 className='m-5 font-bold text-lg'>
                    <u>Followed Hashtags</u>
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
                        </svg> SRMIST
                    </div>  
                </div>

                <hr className='my-4 border-black' />

                <h1 className='m-5 font-bold text-lg'>
                    <u>My Posts</u>
                </h1>
                <div className='h-56 whitespace-nowrap'>
                <div className='container ml-1'>
                    <div className='flex m-2 gap-2 items-center'>
                        <img src={Img} alt='' className='w-20 rounded-md' ></img>
                        <div>
                            <h1 className='font-bold'>
                                Headline
                            </h1>
                            <p className='text-slate-400 text-sm'>
                                8,123 viewers
                            </p>

                        </div>
                    </div>
                    <div className='flex m-2 gap-2 items-center '>
                        <img src={Img} alt='' className='w-20 rounded-md' ></img>
                        <div>
                            <h1 className='font-bold'>
                                Headline
                            </h1>
                            <p className='text-slate-400 text-sm'>
                                8,123 viewers
                            </p>

                        </div>
                    </div>
                </div>
                </div>
        </div>

        <div className='border-l-4 border-grey-500 w-3/5 h-screen pb-20 overflow-scroll scrollbar'>

            <div className='pb-20'>
                <div className='container p-5 mt-1 '>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex gap-5 items-center'>

                        <img src={Profile} className='w-12 h-12 rounded-full border-2 border-yellow-400' alt='...'></img>

                            <div className='mt-5'>
                                <div className='flex gap-2 w-full items-center'>
                                    <p className='text-lg font-bold'>Roshan SK</p><p className='text-sm text-slate-500'>52 D</p>
                                </div>
                                <div>
                                    <p className='text-sm text-slate-600'>Data Analyst</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className='flex text-yellow-500 gap-2 text-sm items-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-base">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg> Posted on May-25-2024
                            </span>
                        </div>
                    </div>                 
                    <div className="m-5">
                        <div>
                            <h1 className='mb-3 text-xl font-bold'>Intgeration of AI in WebApp</h1>
                        </div>
                        <div>
                            <p className='mb-2 text-justify text-base'>
                            Learn how to create a concise and comprehensive project summary with our example report templates. Find out what to include, how to title, and how to write a project summary for internal and external purposes.
                            Learn how to create a concise and comprehensive project summary with our example report templates. Find out what to include, how to title, and how to write a project summary for internal and external purposes.
                            Learn how to create a concise and comprehensive project summary with our example report templates. Find out what to include, how to title, and how to write a project summary for internal and external purposes.
                            </p>
                     </div>

                     
  <div className='container'>
    <TECarousel showControls showIndicators ride="carousel">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <TECarouselItem itemID={1} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <Link to="/postinteraction">
            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" className="block w-full rounded-2xl m-1" alt="..."/>
          </Link>
        </TECarouselItem>
        <TECarouselItem itemID={2} className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <Link to="/postinteraction">
            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" className="block w-full rounded-2xl m-1" alt="..."/>
          </Link>
        </TECarouselItem>
        <TECarouselItem itemID={3} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <Link to="/postinteraction">
            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" className="block w-full rounded-2xl" alt="..."/>
          </Link>
        </TECarouselItem>
      </div>
    </TECarousel>
  
</div>

                        <div className='flex container p-3 m-5 justify-between'>
                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg><p>10</p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg><p>1</p>
                            </div>

                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg> <p>5</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='container p-5 mt-1 border rounded-lg'>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex gap-5 items-center'>

                        <img src={Profile} className='w-14 h-14 rounded-full border-2 border-yellow-400' alt='...'></img>
                            <div className='mt-5'>
                                <div className='flex gap-2 w-full items-center'>
                                    <p className='text-lg font-bold'>Roshan SK</p><p className='text-sm text-slate-500'>52 D</p>
                                </div>
                                <div>
                                    <p className='text-sm text-slate-600'>Data Analyst</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className='flex text-yellow-500 gap-2 text-sm items-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-base">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg> Posted on May-25-2024
                            </span>
                        </div>
                    </div>

                    <div className="m-5">
                        <div>
                            <h1 className='mb-3 text-xl font-bold'>Intgeration of AI in WebApp</h1>
                        </div>
                        <div>
                            <p className='mb-2 text-justify text-base'>
                            Learn how to create a concise and comprehensive project summary with our example report templates. Find out what to include, how to title, and how to write a project summary for internal and external purposes.
                            Learn how to create a concise and comprehensive project summary with our example report templates. Find out what to include, how to title, and how to write a project summary for internal and external purposes.
                            Learn how to create a concise and comprehensive project summary with our example report templates. Find out what to include, how to title, and how to write a project summary for internal and external purposes.
                            </p>
                        </div>
                        <div className='container'>
    <TECarousel showControls showIndicators ride="carousel">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <TECarouselItem itemID={1} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <Link to="/postinteraction">
            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" className="block w-full rounded-2xl m-1" alt="..."/>
          </Link>
        </TECarouselItem>
        <TECarouselItem itemID={2} className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <Link to="/postinteraction">
            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" className="block w-full rounded-2xl m-1" alt="..."/>
          </Link>
        </TECarouselItem>
        <TECarouselItem itemID={3} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <Link to="/postinteraction">
            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" className="block w-full rounded-2xl" alt="..."/>
          </Link>
        </TECarouselItem>
      </div>
    </TECarousel>
  
</div>

                        <div className='flex container p-3 m-5 justify-between'>
                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg><p>10</p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg><p>1</p>
                            </div>

                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg> <p>5</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='container p-5 mt-1 border rounded-lg'>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='flex gap-5 items-center'>

                        <img src={Profile} className='w-14 h-14 rounded-full border-2 border-yellow-400' alt='...'></img>
                            <div className='mt-5'>
                                <div className='flex gap-2 w-full items-center'>
                                    <p className='text-lg font-bold'>Roshan SK</p><p className='text-sm text-slate-500'>52 D</p>
                                </div>
                                <div>
                                    <p className='text-sm text-slate-600'>Data Analyst</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className='flex text-yellow-500 gap-2 text-sm items-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-base">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg> Posted on May-25-2024
                            </span>
                        </div>
                    </div>

                    <div className="m-5">
                        <div>
                            <h1 className='mb-3 text-xl font-bold'>Intgeration of AI in WebApp</h1>
                        </div>

                        <div>
                            <p className='mb-2 text-justify text-base'>
                            Learn how to create a concise and comprehensive project summary with our example report templates. Find out what to include, how to title, and how to write a project summary for internal and external purposes.
                            Learn how to create a concise and comprehensive project summary with our example report templates. Find out what to include, how to title, and how to write a project summary for internal and external purposes.
                            Learn how to create a concise and comprehensive project summary with our example report templates. Find out what to include, how to title, and how to write a project summary for internal and external purposes.
                            </p>
                        </div>

                        <div className='container'>
    <TECarousel showControls showIndicators ride="carousel">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <TECarouselItem itemID={1} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <Link to="/postinteraction">
            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg" className="block w-full rounded-2xl m-1" alt="..."/>
          </Link>
        </TECarouselItem>
        <TECarouselItem itemID={2} className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <Link to="/postinteraction">
            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" className="block w-full rounded-2xl m-1" alt="..."/>
          </Link>
        </TECarouselItem>
        <TECarouselItem itemID={3} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <Link to="/postinteraction">
            <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" className="block w-full rounded-2xl" alt="..."/>
          </Link>
        </TECarouselItem>
      </div>
    </TECarousel>
  
</div>

                        <div className='flex container p-3 m-5 justify-between'>
                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg><p>10</p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg><p>1</p>
                            </div>

                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg> <p>5</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className=' w-1/4 h-full p-1 overflow-scroll mr-2'>
            <h1 className='m-5 text-xl font-bold'>Events</h1>
            <div className='m-5 p-2 h-full  rounded-md font-bold border bg-blue-100 gap-2'>
                <div className='flex gap-2 text-base'>
                    <p className='pr-4'>Web Dev workshop</p> 
                    <button className='rounded-full border p-1 text-sm text-white bg-green-500'>
                        Live
                    </button>
                </div>
                
                <div className='font-normal text-sm'>
                    <p>Venue : SRMIST</p>
                    <p>Date : <span>2024-20-04</span></p>
                    <p>Timing : <span>20:23:18</span></p>
                </div>

            </div>
            <div className='m-5 p-2 h-full  rounded-md font-bold border bg-blue-100 gap-2'>
                <div className='flex gap-2 text-base'>
                    <p className='pr-4'>Data Warehousing</p>
                    <button className='rounded-full border p-1 text-sm  text-white bg-yellow-500'>
                        Ongoing
                    </button>
                </div>
                
                <div className='font-normal text-sm'>
                    <p>Venue : SRMIST</p>
                    <p>Date : <span>2024-20-04</span></p>
                    <p>Timing : <span>20:23:18</span></p>
                </div>

            </div>
            <div className='m-5 p-2 h-full  rounded-md font-bold border bg-blue-100 gap-2'>
                <div className='flex gap-2 text-base'>
                    <p className='pr-4'>Generative AI</p>
                    <button className='rounded-full border p-1 text-sm  text-white bg-red-500'>
                        Closed
                    </button>
                </div>
                
                <div className='font-normal text-sm'>
                    <p>Venue : SRMIST</p>
                    <p>Date : <span>2024-20-04</span></p>
                    <p>Timing : <span>20:23:18</span></p>
                </div>

            </div>

            <div className='m-5 p-2 h-full  rounded-md font-bold border bg-blue-100 gap-2'>
                <div className='flex gap-2 text-base'>
                    <p className='pr-4'>Flutter Workshop</p>
                    <button className='rounded-full border p-1 text-sm  text-white bg-green-500'>
                        Live
                    </button>
                </div>
                
                <div className='font-normal text-sm'>
                    <p>Venue : SRMIST</p>
                    <p>Date : <span>2024-20-04</span></p>
                    <p>Timing : <span>20:23:18</span></p>
                </div>

            </div>
            
            
        {/* <div className='border rounded-lg p-2'>
            <div className='flex items-center w-full justify-between'> 
            <div className='flex items-center gap-2'>
                        <div>
                            <img src={Img} alt='' className='w-16 h-16 rounded-full ' ></img>
                        </div>
                        <div>
                            <h1 className='font-bold'>
                                Roshan SK
                            </h1>
                            <p className='text-slate-400 text-sm'>
                                @Roshan SK
                            </p>
                        </div>
                <div>
                
            </div>

            </div>
            <div className=''>
                <button className='right-1 bottom-1 p-2 rounded-full border-2 border-blue-500 text-blue-500 font-medium'>
                    Others
                </button>
            </div> 
            </div>
        </div> */}

        <div>

        </div>
        </div>

                        

      </div>
    </div>
  )
}

export default Feed