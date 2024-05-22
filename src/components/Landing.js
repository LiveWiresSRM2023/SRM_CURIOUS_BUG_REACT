import React from 'react';
import landingImage from '../assets/images/landing_img.png';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white" style={{backgroundImage: `url(${landingImage})`}}>
      <h4 className="absolute top-0 left-0 mt-4 ml-8 font-bold text-2xl" style={{ fontFamily: 'Archivo, sans-serif' }}>
        Curious Bees
      </h4>
      <button className="absolute top-0 right-0 mt-4 mr-8 py-1 px-4 rounded text-white bg-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'normal' }}>
        Log in
      </button>

      <div className="text-center">
        <h2 className="font-bold text-6xl" style={{ fontFamily: 'Archivo, sans-serif' }}>
          Empowering Researchers
        </h2>
        <h2 className="font-bold text-6xl" style={{ fontFamily: 'Archivo, sans-serif' }}>
          Advancing Knowledge
        </h2>
        <button className="mt-8 py-2 px-4 font-bold rounded text-black text-2xl" onClick={()=>{
          navigate("/signin")
        }} style={{ backgroundColor: '#DE9A3A', fontFamily: 'Archivo, sans-serif' }}>
          Join for Free
        </button>
      </div>
    </div>
  );
};

export default Landing;
