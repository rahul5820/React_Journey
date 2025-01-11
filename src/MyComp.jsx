import { useState } from "react";


function MyComp(){

  
//   let  [value , setValue]=useState(1)

//   let decrease=()=>setValue(value-1);
 
//   let inccrease=()=> setValue(value+1);

//     return (

//      <><button onClick={inccrease}>Increase</button>
//      <h1>{value}</h1>
//      <button onClick={decrease}>Decrease</button>
//      </>
// )


// const [name,setName]=useState("name");

// // let changeName=()=> setName("Rahul");

// return(

// <>
//     <h1>Name:{name}</h1>
//     <button onClick={()=>setName("rahul")}  >  ClickToChange</button>
// </>)




let [count ,setCount]=useState(1);
const [age,setAge]=useState(1);

const [isEmployed,SetEmployStatus]=useState(true)

let changeEmployStatus=()=> SetEmployStatus(!isEmployed);


return(
<>
<div className="UseState">

<button onClick={()=>setCount(count=>count+1)}>increase</button>
<h1>{count}</h1>
<button onClick={()=>setCount(count-1)}>Decrease</button> 
<button onClick={()=>setCount(0)}>Reset</button> </div>

<div>

<h1> Age:{age}  </h1>
<button onClick={()=>setAge(age+1)}>Click to Update Age</button>


</div>

<div>
<p> isemployed:{isEmployed?"Yes have job":"no m searching for job"}</p>
<button onClick={changeEmployStatus}>click to change job status</button>
</div>

</>



)







    
}
export default MyComp;