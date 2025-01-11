import PropsTypes from "prop-types";

function UserGreet(mess) {
  //    if (mess.isLoggedIn){
  //     return (
  //         <div>
  //           <h1>Time:{mess.time}</h1>
  //           <h1>User:{mess.user}</h1>

  //           <h1>Meessage:{mess.greet}</h1>

  //         </div>
  //       )
  //    }
  //    else{
  //     return (<h1>plzz log in </h1>)
  //    }
   const Welcome=<div className="welcome">
               <h1>{mess.time}</h1>
                   <h1>{mess.user}</h1>

                <h1>{mess.greet}</h1>
                </div>

 const LogIn= <h1 className=" Log-in">Please log in </h1>
    return(mess.isLoggedIn ? 
      Welcome
    : 
     LogIn
    )
  
}
UserGreet.popsTypes = {
  isLoggedIn:PropsTypes.bool,
  time: PropsTypes.string,
  user: PropsTypes.string,
  greet: PropsTypes.string,
};
UserGreet.defaultProps={
    isLoggedIn:false,
    user:"Guest",
    time:"  Hii",
    greet:"Welcome to my app",

}
export default UserGreet;
