import { useState } from "react"

function CarObj() {


    const [car,setCar]=useState({  year:2024,
                                  Make:"Ford",
                                  Model:"Mustang"  ,


    })


  return (
    <>
    <div className="Car-Model">
           <p>user Favorite car is{`${car.Make} ${car.Model} from ${car.year} `}</p>
    </div>
    {/* <input type="number"value={car.year} onChange={(e)=>setCar( car=>  ({...car,year:e.target.value}     ) )}/><br/> */}
    <input type='number' value={car.year} onChange={(e)=>setCar(c=>({...c,year:e.target.value}))}/>
    <input type="text"value={car.Make}  onChange={(e)=>{setCar(    car=>   ({...car,Make:e.target.value}   )  )}}/><br/>
    <input type="text"value={car.Model}  onChange={(e)=>{setCar(car=>({...car,Model:e.target.value} ))}}  /><br/>
    </>
  )
}

export default CarObj
