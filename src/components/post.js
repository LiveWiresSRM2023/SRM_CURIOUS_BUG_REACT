
// Post.js
import React, { useState,useEffect } from "react";
import { firestore,auth, storage } from "../configuration/firebase"; // Adjust the path as necessary
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Post({ onClose }) {
  const [Isselected, setIsselected] = useState(false);
  const [Arrcoll, setArrcoll] = useState([]);
  const [Newarr, setNewarr] = useState("");
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  

  const addcoll = (e) => {
    e.preventDefault();
    setArrcoll(t => [...t, Newarr]);
    setNewarr("");
  };

  const change = (e) => {
    setNewarr(e.target.value);
    console.log(e.target.value);
  };

  const deletechange = (index) => {
    const updatedcoll = Arrcoll.filter((_, i) => i !== index);
    setArrcoll(updatedcoll);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let fileURL = "";
      if (file) {
        const storageRef = ref(storage, `srmeureka/posts/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        await uploadTask;
        fileURL = await getDownloadURL(storageRef);
      }

      const timestamp = new Date().toISOString();

      await addDoc(collection(firestore, "post"), {
        title,
        abstract,
        collaborators: Arrcoll,
        collaborate: Isselected,
        media: fileURL,
        timestamp,
        userName: userName,
        photoUrl: photoUrl

      });

      alert("Post added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding post.");
    }
    navigate('/home');
  };


  const [userName,setUserName] =useState("")
  const [photoUrl,setPhotoUrl] =useState("")



  useEffect(() => {
    const fetchdata = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserName(user.displayName);
        setPhotoUrl(user.photoURL);
       //  setUserEmail(user.email)
       }
    });
 
    return () => fetchdata();
  }, []);













  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-[1] ">
      <div className="bg-white h-[680px] w-[820px] rounded-[20px] flex flex-col items-center overflow-auto">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-[20px] pt-10 pb-10">
          <div className="flex flex-col">
            <label htmlFor="Title" className="text-[18px] font-bold pb-5"> Title </label>
            <input 
              type="text" 
              id="Title" 
              className="w-[700px] h-[50px] border-black border-[2px] rounded-md bg-gray-50 focus:border-gray focus:outline-none p-[10px]" 
              placeholder="Enter your text here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="abstract" className="text-[18px] font-bold pb-5"> Abstract </label>
            <textarea 
              type="text" 
              id="abstract" 
              className="w-[700px] h-[150px] border-black border-[2px] bg-gray-50 rounded-md focus:border-gray focus:outline-none p-[10px] resize-none" 
              placeholder="Enter abstract here"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col w-[700px] items-baseline">
            <h1 className="text-[18px] font-bold pb-5">Media</h1>
            <label htmlFor="file" className="border-solid border-[2px] border-gray-400 bg-gray-200 rounded-[20px] p-[40px]">
              <FontAwesomeIcon icon={faPlus} style={{color: "#DE9A4A",}}/>
            </label>
            <input type="file" id="file" className="hidden" onChange={handleFileChange} />
          </div>

          <div className="flex flex-col w-[700px] items-baseline">
            <label htmlFor="" className="text-[18px] font-bold pb-5"> Invite </label>
            <div className="flex gap-2 items-center">
              <input 
                type="text" 
                onChange={change} 
                value={Newarr} 
                className="w-[200px] h-[40px] focus:border-gray focus:outline-none border-black border-[2px] bg-gray-50 rounded-md p-[10px]" 
                placeholder="Add Collaborator"
              />
              <button onClick={addcoll}>
                <FontAwesomeIcon icon={faPlus} style={{color: "#DE9A4A",}} />
              </button>
              <div>
                <ul className="flex gap-[5px]">
                  {Arrcoll.map((coll, index) => (
                    <li key={index} className="bg-[#DE9A4A] rounded-[10px]">
                      <span className="h-[40px] text-center p-[5px]">{coll}</span>
                      <button className="p-1" onClick={() => deletechange(index)}>
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[700px] items-baseline" onClick={() => setIsselected(!Isselected)}>
            <label htmlFor="" className="text-[18px] font-bold pb-5"> Collaborate </label>
            <div className={`flex w-10 h-5 ${Isselected ? "bg-[#DE9A4A]" : "bg-[#f7d2a8]"} rounded-full`}>
              <span className={`h-5 w-5 bg-[#DE9A4A] ${Isselected ? "ml-10" : "null"} rounded-full transition-all duration-400`}> </span>
            </div>
          </div>
          
          <div className="">
            <button type="submit" className="h-[40px] w-[100px] rounded-[40px] font-semibold bg-[#DE9A4A] text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
