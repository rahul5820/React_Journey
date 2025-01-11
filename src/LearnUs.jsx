
import {useState,useEffect} from 'react'

function LearnUs() {

    const [count ,setCount]=useState(0);
    const [color,setColor]=useState("green")

    useEffect(()=>{
document.title= `My App - ${count} ${color}`

    },[count,color])

  return (
    <div>
      <p style={{color:color}}>COUNT:{count}</p>
      <button onClick={()=>setCount(c=>c+1)}>ADD</button>
      <button onClick={()=>

               { count>0?setCount(c=>c-1):""
                    

               }}> SUBTRACT</button>
      <button onClick={()=>setColor(
      color=>  color==="green"?"Red":"green"

      )}>Change Color</button>
    </div>
  )
}

export default LearnUs;
