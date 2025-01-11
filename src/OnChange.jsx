
import { useState } from "react"


function OnChange() {

const [name, setName] = useState('');
const [quantity ,setqunatity]=useState();
const [comment,setComment]=useState("");
const [payment,setPayment]=useState("");
const [shippinf, setShipping] = useState();
  return (
    <div className="OnChange">
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <p>Name:{name}</p>
      <input value={quantity }onChange={(e)=>setqunatity(e.target.value) } type="number"/>
      <p>Order Qnatity :{quantity}</p>
      <textarea value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="enter the delivery instruction" />
      <p>Instruction:{comment}</p>
      <select value={payment} onChange={(e)=>setPayment(e.target.value)}>
     
        <option value="">Select an option</option>
        <option value="cash">Cash</option>
        <option value="card">Card</option>
        <option value="Visa">Visa</option>

        </select>
        <p>Payment Mode:{payment}</p>


    <label>
    <input type="radio"value="pick Up" checked={(shippinf=="pick Up")} onChange={(e)=>setShipping(e.target.value)} />

      Pick Up
    </label>
      <br></br>
    <label>
    <input type="radio"value="Delivery" checked={(shippinf=="Delivery")} onChange={(e)=>setShipping(e.target.value)} />

  Devilvary
    </label>
    <p>Shipping Mode:{shippinf}</p>

 
    </div>
  )
}

export default OnChange;
