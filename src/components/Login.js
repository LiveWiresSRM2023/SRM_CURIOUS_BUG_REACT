import logo from '../assets/images/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../configuration/firebase'; // Import your Firestore instance and auth
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

  

const Login = () => {


  const [currentUser, setCurrentUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [department, setDepartment] = useState("");
  const [lastName, setLastName] = useState("");
  const [college, setCollege] = useState("");
  const [position, setPosition] = useState("");
  const [redirect, setRedirect] = useState(false); // State to control redirection

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAddItem = async () => {
    if (!currentUser) {
      console.error("No user is signed in.");
      return;
    }

    try {
      // Add item to Firebase collection with UID as document ID
      await firestore.collection("profile").doc(currentUser.uid).set({
        first_name: firstName,
        last_name: lastName,
        department: department,
        position: position,
        college: college
      });

      // Clear input fields after adding item
      setFirstName("");
      setLastName("");
      setDepartment("");
      setPosition("");
      setCollege("");

      // Set redirect state to true to trigger navigation
      setRedirect(true);

      console.log("Item added successfully!");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Render Navigate component if redirect state is true
  if (redirect) {
    return <Navigate to="/Home" />;
  }


  return (

    <div className='flex flex-col justify-center items-center h-[100vh] bg-[#F4F4F4]'>
      <div className='pb-10'>
      <img src={logo} className='h-[80px] w-[150px] ' alt="..." />
      </div>

      <div className='p-1 flex flex-col '>
         <label htmlFor="" className='font-bold pb-2' >First name</label>
         <input className='w-[400px] h-[35px] rounded shadow-sm ' type="text" 
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}/>
      </div>
         
      <div className='p-1 flex flex-col'>
         <label htmlFor="" className='font-bold pb-2'>Last name</label>
         <input className='w-[400px] h-[35px] rounded shadow-sm' type="text"
         value={lastName}
         onChange={(e) => setLastName(e.target.value)} />
      </div>

      <div className='p-1 flex flex-col'>
           <label htmlFor="" className='font-bold pb-2'>College</label>
           <input className='w-[400px] h-[35px] rounded shadow-sm' type="text"
           value={college}
           onChange={(e) => setCollege(e.target.value)} />
      </div>

      <div className='p-1 flex flex-col'>
         <label htmlFor="" className='font-bold pb-2'>Department</label>
         <input className='w-[400px] h-[35px] rounded shadow-sm' type="text" 
         value={department}
         onChange={(e) => setDepartment(e.target.value)}/>
      </div>

      <div className='p-1 flex flex-col'>
           <label htmlFor="" className='font-bold pb-2'>Position</label>
           <input className='w-[400px] h-[35px] rounded shadow-sm' type="text" 
           value={position}
           onChange={(e) => setPosition(e.target.value)}/>
      </div>

      <div className='flex justify-center items-center p-3 gap-1'>
        <input type="checkbox" id='check' className='accent-[#DE9A3A]' />
        <label htmlFor="check" className='text-[13px]'>I agree to the Terms of Service and acknowledge the privacy policy</label>
        
      </div>

      <button className='w-[400px] h-[35px] rounded bg-[#DE9A3A] font-bold'  onClick={handleAddItem}>Continue</button>
    </div>

    
  )
}



export default Login
