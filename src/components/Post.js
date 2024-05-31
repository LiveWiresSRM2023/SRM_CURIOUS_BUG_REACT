import React from "react";
import { useState } from "react";
import pic from "../assets/images/pfp.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCaretDown,faClock ,faPlus } from '@fortawesome/free-solid-svg-icons'


function Post({onClose}) {
    const [Isselected , setIsselected] = useState(false)
    const [Arrcoll , setArrcoll] = useState([])
    const [Newarr , setNewarr] = useState("")
    const addcoll = (e) => {
         e.preventDefault()
         setArrcoll( t=> [...t, Newarr])
         setNewarr("")
         
    }

    const change = (e) => {
       setNewarr(e.target.value)
       console.log(e.target.value)
    
    
    }

    const deletechange = (index,e) => {
        const updatedcoll = Arrcoll.filter((_,i) => i !== index);
        setArrcoll(updatedcoll)
    }
    return(
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-[1] ">
           
            <div className="bg-white h-[680px] w-[820px] rounded-[20px] flex flex-col items-center overflow-auto   ">
            {/* <div onClick={onClose} className="text-right pr-[50px] pb-10px">
                <FontAwesomeIcon icon={faXmark} size="xl"/>
            </div> */}
                 <form action="" className="flex flex-col items-center gap-[20px] pt-10 pb-10" >
                    <div className="flex flex-col">
                    <label htmlFor="Title" className="text-[18px] font-bold pb-5"> Title </label>
                    <input type="text" id="Title" className="w-[700px] h-[50px] border-black border-[2px] rounded-md bg-gray-50 focus:border-gray focus:outline-none p-[10px] " placeholder="Enter your text here"/>
                    </div>
                    
                    <div className="flex flex-col"> 
                    <label htmlFor="abstract" className="text-[18px] font-bold pb-5"> Abstract </label>
                    <textarea type="text" id="abstract" className="w-[700px] h-[150px] border-black border-[2px] bg-gray-50 rounded-md focus:border-gray focus:outline-none p-[10px] resize-none" placeholder= "Enter abstract here" />
                    </div>
                    
                    <div className="flex flex-col w-[700px] items-baseline " >
                       <h1 className="text-[18px] font-bold pb-5">Media</h1>
                       <label htmlFor="file" className="border-solid border-[2px] border-gray-400 bg-gray-200 rounded-[20px] p-[40px] "><FontAwesomeIcon icon={faPlus} style={{color: "#DE9A4A",}}/></label>
                       <input type="file" id="file"  className="hidden "/>
                    </div>

                    <div className="flex flex-col w-[700px] items-baseline ">
                        <label htmlFor="" className="text-[18px] font-bold pb-5"> Invite </label>
                        <div className="flex gap-2 items-center">
                            <input type="text" onChange={change}  value={Newarr} className="w-[200px] h-[40px]  focus:border-gray focus:outline-none border-black border-[2px] bg-gray-50 rounded-md p-[10px]" placeholder="Add Collaborator"/>
                            <button onClick={addcoll} ><FontAwesomeIcon icon={faPlus} style={{color: "#DE9A4A",}} /></button>
                            <div>
                                <ul className="flex gap-[5px]">
                                    {Arrcoll.map((coll,index) =>
                                    <li key={index} className=" bg-[#DE9A4A] rounded-[10px]">
                                        <span className="h-[40px] text-center p-[5px] ">{coll}</span>
                                        <button className="p-1." onClick={() => deletechange(index)}><FontAwesomeIcon icon={faXmark} /></button>
                                    </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-[700px] items-baseline  " onClick={() => setIsselected(!Isselected)}>
                       <label htmlFor="" className="text-[18px] font-bold pb-5"> Collaborate </label>
                       <div className= {`flex w-10 h-5 ${Isselected? "bg-[#DE9A4A]" : "bg-[#f7d2a8]"} rounded-full`}>
                          <span className={`h-5 w-5 bg-[#DE9A4A] ${Isselected? "ml-10" : "null"} rounded-full transition-all duration-400`}> </span>

                       </div>

                    </div>
                   
                    <div className="">
                        <button className=" h-[40px] w-[100px] rounded-[40px] font-semibold bg-[#DE9A4A] text-white ">Submit</button>
                    </div>
                </form>
                
             
               

               

               

               

            </div>

        </div>
    )
    
}

export default Post