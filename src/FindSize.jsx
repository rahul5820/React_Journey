import { useEffect, useState } from "react"



function FindSize() {

const [width,setWidth]=useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);

function HandleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}




// ----Using useEffect-----///

useEffect(()=>{
    window.addEventListener("resize",HandleResize)
console.log("event listener added")

},[])
useEffect(()=>{
    document.title=`Height ${height} Width ${width}`
},[height,width])




  return (
    <div>
      
      <p>width:{width}</p>
      <p>Height:{height}</p>
    </div>
  )
}

export default FindSize
