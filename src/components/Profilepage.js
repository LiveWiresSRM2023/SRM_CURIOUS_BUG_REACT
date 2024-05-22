import React from "react";
import pic from "../assets/images/pfp.jpg"
import cover from '../assets/images/Rectangle 14.png'
import email from '../assets/icons/gmail.png'
import github from '../assets/icons/github.png'
import twitter from '../assets/icons/twitter.png'
import actimg from '../assets/images/Techutsav Certificate  3.png'

function Activity() {
   return(
   
      <div className="pt-3">
         <h3 className="font-semibold text-[14px] pb-3">Seyadu Raja K <span className=" font-normal text-[12px]">posted this 3 weeks ago</span></h3>
         <div className="flex items-center gap-3 pb-3">
            <img src={actimg} alt="" className="h-[70px] w-[70px]" />
            <p className="text-justify text-[14px]">🎉 Thrilled to announce that our team has won the [Competition Name] 🏆! A huge thank you to everyone who supported us along the way.
                This achievement is a testament to our hard work, dedication, and team spirit. 
                Looking forward to many more milestones ahead! 🚀 #Achievement #Teamwork #Success <span className="font-normal text-[14px]">...Show more</span></p>
         </div>
         <div className="h-[1px] w-[100%] bg-slate-200 "></div>
      </div>
   ) 
}

function Youknow() {
   return(
      <>
      <div className="flex items-center gap-4 pb-3 pt-3">
      <img src={pic} alt="" className="h-[60px] w-[60px] rounded-[50%] object-cover" />
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
 return(
    <div className=' w-[100%] flex  bg-[#F4F4F4] ' >
     
        <div className="w-[73%] flex flex-col items-center">
           <div className="w-[95%]  bg-white m-5 rounded-lg">
            <div className="">
               <img src={cover} alt="" className="p-4 " />
               <div className="mt-[-85px] ml-[30px] ">
                   <img src={pic} alt="" className="h-[130px] w-[130px] rounded-[50%] object-cover  " />
               </div>
               <div className="flex items-center ">
               <div className="pt-3 pb-3 pl-4 ">
                     <h1 className="font-bold text-[25px]">Seyadu Raja K<span className="text-[15px] font-normal"> @raja_seyadu</span> </h1> 
                     <h2 className="font-bold text-[17px]">React Developer</h2>
                     <h3 className="text-[15px] font-normal">Chennai,Tamilnadu,India</h3>
               </div>
               
               <div className="flex items-center w-[70%] justify-between ">
                  <div className="flex flex-col items-center pt-3 pl-12">

                  <div className="pb-3">
                     <p>contact info</p>
                  </div>
                 
                  <div className="flex  items-center gap-4">
                       <img src={email} alt=""   className="h-[25px] w-[30px]"/>
                       <img src={github} alt=""  className="h-[25px] w-[25px]"/>
                       <img src={twitter} alt="" className="h-[25px] w-[25px]" />    
                  </div>

                  </div>

                  <div className="">
                     <button className="bg-[#DE9A3A] rounded-[30px] w-[100px] h-[35px] text-[13px]">
                           Edit profile
                     </button>
                  </div>
               
                  </div>


               </div>
               
            </div>
           </div>
        {/* end of the header part  */}

        <div className="w-[95%]  bg-white m-5 rounded-lg mt-0 p-4">
            <h1 className="font-bold text-[25px] pb-3">About</h1>
            <p className="text-justify text-[15px]">React developers are specialized software engineers who focus on building user interfaces (UIs) using the React.js library. 
               React.js is a popular JavaScript library developed by Facebook, known for its efficiency and flexibility in creating dynamic and responsive web applications.
                React developers leverage the component-based architecture of React to build reusable UI components, manage application state, and ensure a seamless user experience.</p>
        </div>


        {/* end of the about */}
         
       <div className="w-[95%]  bg-white m-5 rounded-lg mt-0 p-4">
         <div className="flex items-center justify-between">
            <h1 className="font-bold text-[25px] pb-2">Activity</h1>
            <button className="bg-[#DE9A3A] rounded-[30px] w-[90px] h-[35px] text-[13px]">
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
          <div className=" w-[95%] m-5 ml-0 p-4 bg-white rounded-lg">
               <h1 className="font-bold text-[23px] pb-2">User ID</h1>
               <h1 className=" text-[21px] text-[#25316D]">www.srmcuriousbees.in/Seyadu Raja K</h1>
          </div>
          {/* end of the user id  */}

          <div className="w-[95%] m-5 ml-0 mt-0 p-4 bg-white rounded-lg">
              <h1 className="font-bold text-[23px] pb-3">You might know:</h1>

               <Youknow/>
               <Youknow/>
               <Youknow/>

               <div className="pt-4">
                   <h1 className="text-center">Show more</h1>
               </div>

          </div>
          
          {/* end of the you might know */}

          <div className="w-[95%] m-5 ml-0 mt-0 p-4 bg-white rounded-lg">
               <h1 className="font-bold text-[23px] pb-3">Disciplines:</h1>
          </div>


         
        </div>
    </div>

)
    
}

export default Profile