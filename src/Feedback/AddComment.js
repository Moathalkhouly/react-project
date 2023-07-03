import React, { useEffect, useState } from 'react'


export default function AddComment() {
   const [changeComment,setChangeComment]=useState('')
//    const [dataComent, setDataComent] = useState('');

//    useEffect(()=>{
//     fetch("http://localhost:5001/post")
//     .then((res)=>res.json())
//     .then((data)=>setDataComent(data))
//    },[])



   const HandleComent=(e)=>{
   e.preventDefault();


    // setDataComent(changeComment)
    // fetch("http://localhost:5001/post/1", {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(dataComent),
     }
   
        
  
  return (
    <div>
     <form >
        <input type='text' onChange={(e)=>{setChangeComment(e.target.value)}}/>
        <button onClick={HandleComent}>coment</button>
        <h1>{changeComment}</h1>
     </form>
     
    </div>
  )
}
