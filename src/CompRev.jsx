import  { useState } from 'react'

function CompRev() {

const [name,setName]=useState("");
function addname(){
let x=document.getElementById('input-content').value;

setName(x);
document.getElementById('input-content').value=""
 

}

  return (
    <div>
      <h1>Name Writter</h1>
      <p>{`you Are Wlcoeme : ${name}`}</p>
      <input type='text ' value={name} id='input-content' onChange={(e)=>setName(e.target.value)} placeholder='enter youe=r name'/>
      <button onClick={addname}>Sumbit Your Button</button>
    </div>
  )



}


export default CompRev
