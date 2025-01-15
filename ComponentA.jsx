import ComponentB from "./ComponentB";
 import { useState } from "react";
 import { createContext } from "react";
 export  const userContext=createContext();


function ComponentA() {
  const [user,setUser]=  useState("Rahul Bhai");
  return (
    <div className="Comp-a">
    <h1>  ComponentA</h1>
    <h2> hlw {user}</h2>
    <userContext.Provider value={user}>
    <ComponentB/>
      
    </userContext.Provider>

  
    </div>
  )
}

export default ComponentA;
