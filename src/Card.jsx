import ProfilePic from "./assets/peakpx.jpg";
// import profilePic2 from './assets/peakpx(1).jpg'
import "./Card.css";
function Card() {
  // const buttonbigger=()=> console.log("Button clicked")
  // const buttonbigger2=(name)=> console.log( `${name} stop it yrr karna hee mhi mujhe`)
  // let count=0;
  // let buttonbigger2=(name)=>{
  //   if(count<3){
  //     count++;
  //     console.log(`${name} you click ${count} times`)

  //   }
  //   else{
  //    console.log( `${name} stop clicking me many times`)
  //   }
  // };
  let handleClick = (e) => e.target.style.display="none";
  let makeHide = (e) => {e.target.style.backgroundColor="red"; e.target.style.color="black";e.target.style.padding="18px"};


  return (
    <div className="Card">
      <img className="card-image" src={ProfilePic} alt="Profile picture" onClick={(e) => handleClick(e)}></img>
      <img
        className="card-image" src="./assets/peakpx.jpg"
       
      ></img>
      <h2 className="card-title">Rahul</h2>
      <p className="card-text"> I am a React developer</p>
      {/* <button className='Button-in' onClick={()=>buttonbigger2('Rahul')}  > Click me to make bigger </button> */}
      <button className="Button-in"  onClick= {(e)=>makeHide(e)}>
       
        Click me to make bigger
      </button>
    </div>
  );
}
export default Card;
