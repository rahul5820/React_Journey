import { useState } from "react";
const Meal = () => {



  const [meal, setMeal] = useState([
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
  ]);

  function  addFoodItem(){

const NewFood=document.getElementById('food-item').value;
document.getElementById('food-item').value="";
    setMeal(meal=>[...meal, NewFood])

    

  }


  return (<div>
               <h1> Food Item Include</h1>
               <ul>{meal.map((food,index)=><li key={index}>{food}</li>)}</ul>
               <input type='text' placeholder='Enter Food Item' id ='food-item' /> 
               <button onClick={addFoodItem}>ADD  FOOD</button>
            

               

          </div>);
};

export default Meal;
