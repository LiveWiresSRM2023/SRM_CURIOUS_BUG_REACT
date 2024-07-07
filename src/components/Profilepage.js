// import React, { useEffect, useState } from "react";
// import pic from "../assets/images/pfp.jpg"
// import cover from '../assets/images/Rectangle 14.png'
// import email from '../assets/icons/gmail.png'
// import github from '../assets/icons/github.png'
// import twitter from '../assets/icons/twitter.png'
// import actimg from '../assets/images/Techutsav Certificate  3.png'
// import logo from "../assets/images/logo.png"
// import notif from '../assets/icons/navpronot.png'
// import message from '../assets/icons/navpromes.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import Navbar from "./Navbar";
// import { firestore,auth } from "../configuration/firebase";


// function Activity() {
//    return(
   
//       <div className="pt-3">
//          <h3 className="font-semibold text-[14px] pb-3">Seyadu Raja K <span className=" font-normal text-[12px]">posted this 3 weeks ago</span></h3>
//          <div className="flex items-center gap-3 pb-3">
//             <img src={actimg} alt="" className="h-[70px] w-[70px]" />
//             <p className="text-justify text-[14px]">🎉 Thrilled to announce that our team has won the [Competition Name] 🏆! A huge thank you to everyone who supported us along the way.
//                 This achievement is a testament to our hard work, dedication, and team spirit. 
//                 Looking forward to many more milestones ahead! 🚀 #Achievement #Teamwork #Success <span className="font-normal text-[14px]">...Show more</span></p>
//          </div>
//          <div className="h-[1px] w-[100%] bg-slate-200 "></div>
//       </div>
//    ) 
// }


// function Youknow() {
//    return(
//       <>
//       <div className="flex items-center gap-4 pb-3 pt-3">
//       <img src={pic} alt="" className="h-[60px] w-[60px] rounded-[50%] object-cover" />
//       <div>
//          <h3 className="font-semibold text-[18px] ">Seyadu Raja K</h3>
//          <h5 className="font-semibold text-[15px]">React Developer</h5>
//       </div>
//    </div>
//    <div className="h-[1px] w-[100%] bg-slate-200 "></div>
//    </>
//    )
   
// }
// // const Profile = () => {


// //     const [userData, setUserData] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [userName,setUserName] =useState("");
// //     const [photoURL,setPhotoUrl]=useState("");
// //     const [userEmail,setUserEmail]=useState("");


// //     useEffect(() => {
// //       const fetchData = async () => {
// //           try {
// //                const user = auth.currentUser;
// //                // Get the current user
// //             //   if (user) {
// //             //       // const userId = user.uid;
// //                   setUserName(user.displayName)
// //                   setPhotoUrl(user.photoURL)
// //                   setUserEmail(user.email)// Get the user ID
// //                   const userRef = await firestore.collection("users").doc("123").get(); // Use userId as the document ID
// //                   if (userRef.exists) {
// //                       setUserData(userRef.data());
// //                   } else {
// //                       setError("Document does not exist");
// //                   }
// //             //   } else {
// //             //       setError("User is not authenticated");
// //             //   }
// //           } catch (error) {
// //               console.error("Error fetching document:", error);
// //               setError("Error fetching document");
// //           } finally {
// //               setLoading(false);
// //           }
// //       };

// //       fetchData();
// //   }, []);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error}</p>;




// const Profile = () => {
//    const [userData, setUserData] = useState(null);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState(null);
//    const [userName, setUserName] = useState("");
//    const [photoURL, setPhotoUrl] = useState("");
//    const [userEmail, setUserEmail] = useState("");
 
//    useEffect(() => {
//      const fetchdata = auth.onAuthStateChanged(async (user) => {
//        if (user) {
//          setUserName(user.displayName);
//          setPhotoUrl(user.photoURL);
//          setUserEmail(user.email);
//          try {
//            const userRef = await firestore.collection("users").doc("123").get(); // Use userId as the document ID
//            if (userRef.exists) {
//              setUserData(userRef.data());
//            } else {
//              setError("Document does not exist");
//            }
//          } catch (error) {
//            console.error("Error fetching document:", error);
//            setError("Error fetching document");
//          } finally {
//            setLoading(false);
//          }
//        } else {
//          setError("User is not authenticated");
//          setLoading(false);
//        }
//      });
 
//      return () => fetchdata();
//    }, []);
 
//    if (loading) return <p>Loading...</p>;
//    if (error) return <p>Error: {error}</p>;
 


//  return(
//    <>
//    <div>
//       <Navbar/>
//    </div>
//    {/* <div className="w-[100%] bg-white h-[65px] flex items-center justify-around ">
//       <img src={logo} alt="" className="h-[50px] w-[100px]" />
//       <div className="bg-[#F4F4F4] pl-[10px] pr-[15px] rounded-[25px] border-[#DE9A3A] border-[1px]">
//       <FontAwesomeIcon icon={faMagnifyingGlass} />
//       <input type="text" className="w-[600px] h-[40px] bg-[#F4F4F4] pl-[5px] focus:border-none focus:outline-none" placeholder="Search Curious Bees"/>
//       </div>
//       <button className="bg-[#DE9A3A] rounded-[30px] w-[90px] h-[35px] text-[13px]">Create +</button>
//       <img src={notif} alt="" className="h-[25px] w-[25px]"/>
//       <img src={message} alt="" className="h-[30px] w-[30px]" />
//       <div className="flex items-center gap-2">
//       <img src={pic} alt="" className="h-[30px] w-[30px] rounded-[50%] object-cover" />
//       <FontAwesomeIcon icon={faChevronDown} />
//       </div>
//    </div> */}
//     <div className=' w-[100%] flex  bg-[#F4F4F4] ' >
     
//         <div className="w-[73%] flex flex-col items-center">
//            <div className="w-[95%]  bg-white m-5 rounded-lg">
//             <div className="">
//                <img src={cover} alt="" className="p-4 " />
//                <div className="mt-[-85px] ml-[30px] ">
//                    <img src={photoURL} alt="" className="h-[130px] w-[130px] rounded-[50%] object-cover  " />
//                </div>
//                <div className="flex items-center ">
//                <div className="pt-3 pb-3 pl-4 ">
//                      <h1 className="font-bold text-[25px]">{userName}<span className="text-[15px] font-normal">{userEmail}</span> </h1> 
//                      <h2 className="font-bold text-[17px]">{userData.position}</h2>
//                      <h3 className="text-[15px] font-normal">Chennai,Tamilnadu,India</h3>
//                </div>
               
//                <div className="flex items-center w-[70%] justify-between ">
//                   <div className="flex flex-col items-center pt-3 pl-12">

//                   <div className="pb-3">
//                      <p>contact info</p>
//                   </div>
                 
//                   <div className="flex  items-center gap-4">
//                        <img src={email} alt=""   className="h-[25px] w-[30px]"/>
//                        <img src={github} alt=""  className="h-[25px] w-[25px]"/>
//                        <img src={twitter} alt="" className="h-[25px] w-[25px]" />    
//                   </div>

//                   </div>

//                   <div className="">
//                      <button className="bg-[#DE9A3A] rounded-[30px] w-[100px] h-[35px] text-[13px]">
//                            Edit profile
//                      </button>
//                   </div>
               
//                   </div>


//                </div>
               
//             </div>
//            </div>
//         {/* end of the header part  */}

//         <div className="w-[95%]  bg-white m-5 rounded-lg mt-0 p-4">
//             <h1 className="font-bold text-[25px] pb-3">About</h1>
//             <p className="text-justify text-[15px]">React developers are specialized software engineers who focus on building user interfaces (UIs) using the React.js library. 
//                React.js is a popular JavaScript library developed by Facebook, known for its efficiency and flexibility in creating dynamic and responsive web applications.
//                 React developers leverage the component-based architecture of React to build reusable UI components, manage application state, and ensure a seamless user experience.</p>
//         </div>


//         {/* end of the about */}
         
//        <div className="w-[95%]  bg-white m-5 rounded-lg mt-0 p-4">
//          <div className="flex items-center justify-between">
//             <h1 className="font-bold text-[25px] pb-2">Activity</h1>
//             <button className="bg-[#DE9A3A] rounded-[30px] w-[90px] h-[35px] text-[13px]">
//                Create +
//             </button>
//          </div>
//             <Activity/>
//             <Activity/>

//             <div className="pt-4">
//                <h1 className="text-center">Show all posts</h1>
//             </div>
//        </div>

   
//         </div>
//         {/* the end of right side */}

//         <div className="w-[27%] flex flex-col items-center">
//           <div className=" w-[95%] m-5 ml-0 p-4 bg-white rounded-lg">
//                <h1 className="font-bold text-[23px] pb-2">User ID</h1>
//                <h1 className=" text-[21px] text-[#25316D]">www.srmcuriousbees.in/Seyadu Raja K</h1>
//           </div>
//           {/* end of the user id  */}

//           <div className="w-[95%] m-5 ml-0 mt-0 p-4 bg-white rounded-lg">
//               <h1 className="font-bold text-[23px] pb-3">You might know:</h1>

//                <Youknow/>
//                <Youknow/>
//                <Youknow/>

//                <div className="pt-4">
//                    <h1 className="text-center">Show more</h1>
//                </div>

//           </div>
          
//           {/* end of the you might know */}

//           <div className="w-[95%] m-5 ml-0 mt-0 p-4 bg-white rounded-lg">
//                <h1 className="font-bold text-[23px] pb-3">Disciplines:</h1>
//           </div>


         
//         </div>
//     </div>
//     </>

// )
    
// }

// export default Profile



import React from "react";
import pic from "../assets/images/pfp.jpg"
// import cover from '../assets/images/Rectangle 14.png'
import email from '../assets/icons/gmail.png'
import github from '../assets/icons/github.png'
import twitter from '../assets/icons/twitter.png'
import actimg from '../assets/images/Techutsav Certificate  3.png'
// import logo from "../assets/images/logo.png"
// import notif from '../assets/icons/navpronot.png'
// import message from '../assets/icons/navpromes.png'
import googlesc from "../assets/images/googlescholar.png"
import researchg from '../assets/images/research gate.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown , faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from "react";
// import Post from "../components/post"
import { firestore,auth } from "../configuration/firebase";
import Navbar from "./Navbar";
import Post from "./Post";





function Activity() {
  const [Isshow, setIsshow] = useState(false);
 
   return(
   
      <div className="pt-3">
         <h3 className="font-semibold text-[14px] pb-3">Seyadu Raja K <span className=" font-normal text-[12px]">posted this .</span> <span className=" font-normal text-[12px]">3w</span> </h3>
         <div className="flex justify-center items-center gap-6 pb-3">
            
            <div>
            <img src={actimg} alt="" className="h-[70px] w-[100px]" />
            </div>
         
             <div className="w-[850px]">
            <p className={`text-justify text-[14px] ${Isshow? null : "line-clamp-2"}` }>🎉 Thrilled to announce that our team has won the [Competition Name] 🏆! A huge thank you to everyone who supported us along the way.
                This achievement is a testament to our hard work, dedication, and team spirit. 
                Looking forward to many more milestones ahead! 🚀 #Achievement #Teamwork #Success  </p>
            <p className="font-normal text-[14px] cursor-pointer" onClick={() => setIsshow(!Isshow)}> {Isshow? "show less" : "Show more"} </p>
            </div>
            
         </div>
         <div className="h-[1px] w-[100%] bg-slate-200 "></div>
      </div>
   ) 
}

function Youknow() {
   return(
      <>
      <div className="flex items-center gap-4 pb-3 pt-3">
      <img src={pic} alt="" className="h-[45px] w-[45px] rounded-[50%] object-cover" />
      <div>
         <h3 className="font-semibold text-[18px] "> Seyadu Raja K</h3>
         <h5 className="font-semibold text-[15px]">React Developer</h5>
      </div>
   </div>
   <div className="h-[1px] w-[100%] bg-slate-200 "></div>
   </>
   )
   
}


const Profile = () => {

   

   const [OpenPost , setOpenPost] = useState(false)

   const [userData, setUserData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [userName, setUserName] = useState("");
   const [photoURL, setPhotoUrl] = useState("");
   // const [userEmail, setUserEmail] = useState("");


   const [Isshow, setIsshow] = useState(false);
   // const [OpenPost , setOpenPost] = useState(false)
   // const [Colour , setColour] = useState(false)

//    const colourchange = () => {
//       if (window.scrollY >= 5 ) {
//         setColour(true)
//       }
//       else {
//         setColour(false)
//       }
//    }

// window.addEventListener('scroll', colourchange)


useEffect(() => {
   const fetchdata = auth.onAuthStateChanged(async (user) => {
     if (user) {
       setUserName(user.displayName);
       setPhotoUrl(user.photoURL);
      //  setUserEmail(user.email);
       try {
         const userRef = await firestore.collection("users").doc("123").get(); // Use userId as the document ID
         if (userRef.exists) {
           setUserData(userRef.data());
         } else {
           setError("Document does not exist");
         }
       } catch (error) {
         console.error("Error fetching document:", error);
         setError("Error fetching document");
       } finally {
         setLoading(false);
       }
     } else {
       setError("User is not authenticated");
       setLoading(false);
     }
   });

   return () => fetchdata();
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

 if (error) {
   return (
     <div>
       <p>Error: {error}</p>
     </div>
   );
 }



 return(
   <div>
          <Navbar/>
    <div className=' w-[100%] flex  bg-[#d7d5d5] ' >
    {OpenPost && <Post onClose = {() => setOpenPost(false)} />}
        <div className="w-[73%] flex flex-col items-center">
           <div className="w-[95%]  bg-white m-5 rounded-lg ml-1 mt-3 mb-2">

            <div className="flex justify-between ">
              
               <div className=" flex flex-col items-center gap-[10px] p-[20px] pr-[0px]">
                   <img src={photoURL} alt="" className="h-[160px] w-[160px] rounded-[50%] object-cover  " />
                   <h1 className="font-bold text-[20px] ">{userName}</h1> 
                   <h3 className="text-[15px] font-semibold">Chennai</h3>
               </div>
             
               <div className="flex flex-col p-[20px] pl-[0px] pt-[0px] ">
                     <h1 className="text-[20px] font-bold pt-4 pb-2">Summary</h1>
                     <div className="flex gap-[5px]">
                        <h3 className="font-bold">Position:</h3>
                        <h3>{userData.position}</h3>
                     </div>

                     <div className="flex gap-[5px]">
                        <h3 className="font-bold">Degree:</h3>
                        <h3>{userData.degree}</h3>
                     </div>

                     <div className="flex gap-[5px]">
                        <h3 className="font-bold">Department:</h3>
                        <h3>{userData.department}</h3>
                     </div>

                     <div className="flex gap-[5px]">
                        <h3 className="font-bold">Website:</h3>
                        <h3>{userData.website}</h3>
                     </div>

                     <div className="flex  items-center gap-4 py-3.5">
                       <img src={googlesc} alt="" className="h-[25px] w-[25px]" />
                       <img src={researchg} alt="" className="h-[25px] w-[25px]" />
                       <img src={email} alt=""   className="h-[25px] w-[30px]"/>
                       <img src={github} alt=""  className="h-[25px] w-[25px]"/>
                       <img src={twitter} alt="" className="h-[25px] w-[25px]" />    

                     </div>
                     <div className="">
                     <button className="bg-black rounded-[30px] w-[150px] h-[35px] text-[15px] text-white font-bold">
                           Edit profile
                     </button>
                     </div>
               </div>
               
            </div>
           </div>
        {/* end of the intro part  */}

        <div className="w-[95%]  bg-white m-5 rounded-lg mt-0 p-4 ml-1 mb-2">
            <h1 className="font-bold text-[20px] pb-3">About</h1>
            <div>
            <p className={`text-justify text-[14px] ${Isshow? null : 'line-clamp-2' }`}>React developers are specialized software engineers who focus on building user interfaces (UIs) using the React.js library. 
               React.js is a popular JavaScript library developed by Facebook, known for its efficiency and flexibility in creating dynamic and responsive web applications.
                React developers leverage the component-based architecture of React to build reusable UI components, manage application state, and ensure a seamless user experience.</p>
            <p className="font-normal text-[14px] cursor-pointer" onClick={() => setIsshow(!Isshow)}> {Isshow? "show less" : "Show more"} </p>
            </div>
        </div>


        {/* end of the about */}
         
       <div className="w-[95%]  bg-white m-5 rounded-lg mt-0 ml-1 p-4">
         <div className="flex items-center justify-between">
            <h1 className="font-bold text-[20px] pb-2">Activity</h1>
            <button onClick={() => setOpenPost(true)} className="bg-black text-white font-bold rounded-[30px] w-[100px] h-[35px] text-[15px]">
               Create +
            </button>
         </div>
            <Activity/>
            <Activity/>

            <div className="pt-4">
               <h1 className="text-center">Show all posts</h1>
            </div>
       </div>

   
        </div>
        {/* the end of right side */}

        <div className="w-[27%] flex flex-col items-center">
          <div className=" w-[99%] h-[10%] m-5 ml-0 p-4 bg-white rounded-lg mt-3 mb-2 mr-12">
               <h1 className="font-bold text-[18px] pb-2">User ID : </h1>
               <h1 className=" text-[15px] text-[#25316D]">www.srmcuriousbees.in/Seyadu Raja K</h1>
          </div>
          {/* end of the user id  */}

          <div className="w-[98%] m-5 ml-0 mt-0 p-4 bg-white rounded-lg mb-2 mr-12">
              <h1 className="font-bold text-[18px] pb-3">You might know:</h1>

               <Youknow/>
               <Youknow/>
               <Youknow/>

               <div className="pt-4">
                   <h1 className="text-center">Show more</h1>
               </div>

          </div>
          
          {/* end of the you might know */}

          <div className="w-[98%] m-5 ml-0 mt-0 p-4 bg-white rounded-lg mr-12">
               <h1 className="font-bold text-[18px] pb-3">Interests:</h1>
          </div>


         
        </div>
    </div>
    </div>

)
    
}

export default Profile