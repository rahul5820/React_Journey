import { useContext} from "react";
import { userContext } from "./ComponentA";

function ComponentD() {
  const user=useContext(userContext)
  return (
    <div className="Comp-a">
    <h1>ComponentD</h1>
    <h1> Bye{user}</h1>
      
    </div>
  )
}

export default ComponentD;
