import React from "react";
import pic from "../assets/images/pfp.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function Post() {
    return(
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
           
            <div className="bg-white h-[650px] w-[800px] rounded-lg flex flex-col justify-center ">
            <div className="text-right pr-[50px] pb-10px">
                <FontAwesomeIcon icon={faXmark} size="xl"/>
            </div>
            <div className="flex items-center gap-2 pl-[50px] pb-[30px]">
                <img src={pic} alt="" className="h-[40px] w-[40px] rounded-[50%] object-cover" />
                <div>
                    <h3 className="font-semibold text-[14px] "> Seyadu Raja K</h3>
                    <h5 className="font-semibold text-[10px]">React Developer</h5>
                </div>
            </div>
                 <form action="" className="flex flex-col justify-center items-center gap-[20px]" >
                    <input type="text" className="w-[700px] h-[40px] border-gray border-[1px] focus:border-gray focus:outline-none p-[10px] " placeholder="Title"/>
                    <input type="text" className="w-[700px] h-[40px] border-gray border-[1px] focus:border-gray focus:outline-none p-[10px] " placeholder= "Collaboraters" />
                    <textarea type="text" className="w-[700px] h-[300px] border-gray border-[1px] focus:border-gray focus:outline-none p-[10px] resize-none" placeholder= "what's on your mind?" />
                </form>
                <div className="pt-[30px] text-right pr-[50px]">
                    <button className=" h-[30px] w-[80px] rounded-[40px] font-semibold bg-black text-white ">post</button>
                </div>

            </div>

        </div>
    )
    
}

export default Post