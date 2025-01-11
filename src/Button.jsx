

function Button() {

function Clicked(name){
    console.log(`u clicked me ${name}`);
}

  return (


    <div>
      <button onClick={()=>Clicked("RAHUL")}>Do Something</button>
    </div>
  )
}

export default Button
