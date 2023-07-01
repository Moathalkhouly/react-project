
import React, { Fragment, useEffect, useState } from "react";

export default function SignUp() {
    const[userInformation,setUserInformation]=useState({name:'',email:'',password:'',repetpassword:''})
    const [dataBase, setDataBase] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5001/users")
        .then((res)=>res.json())
        .then((res)=>setDataBase(res))
    },[])
    function HandleForm(e){
        e.preventDefault();

    if(userInformation.name!==''&&    userInformation.name !== "" &&
    userInformation.email !== "" &&
    userInformation.password.length > 7 &&
    userInformation.repetpassword === userInformation.password ){
        const emailExist = dataBase.find(
            (el) => el.email === userInformation.email
          );
          if(emailExist){
            alert("email exist");

          }else{
            fetch("http://localhost:5001/users", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userInformation),
              });

          }

    }else{
        alert("please enter name")
    }
}
  return (
    <Fragment>
    <form onsu>
        <label htmlFor="name">UserName:</label>
        <input 
          type="text"
          name="name"
          onChange={(e)=>{
            setUserInformation({...userInformation,name:e.target.value})
          
          }}
          
          />
          
        <label htmlFor="name">Email:</label>
        <input 
          type="text"
          name="name"
          onChange={(e)=>{
            setUserInformation({...userInformation,email:e.target.value})
         
          }}
          />
        <label htmlFor="name">Passwoerd:</label>
        <input 
          type="password"
          name="Paswoerd"
          onChange={(e)=>{
            setUserInformation({...userInformation,password:e.target.value})
         
          }}
          />
        <label htmlFor="name">repetPasswoerd:</label>
        <input 
            type="password"
          name="repetPaswoerd"
          onChange={(e)=>{
            setUserInformation({...userInformation,repetpassword:e.target.value})
         
          }}
          />
          <button type="submit" onClick={HandleForm}>
          Submit
        </button>
    </form>
    </Fragment>
  );
}
