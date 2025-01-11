


import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Follow from './Follow/Follow.jsx'
import Student from './Student.jsx'
import UserGreet from './UserGreet.jsx'
import List from './List.jsx'
import MyComp from './MyComp.jsx'
import OnChange from './onChange.jsx'
import ColorPicker from './ColorPicker.jsx'
import CarObj from './CarObj.jsx'
import Meal from './Meal.jsx'
import Button from './Button.jsx'
import CompRev from './CompRev.jsx'
import Checkbox from './Checkbox.jsx'
import LearnUs from './LearnUs.jsx'
import FindSize from './FindSize.jsx'

function App() {
 
  const fruits = [
    {id:1, Name: "apple", calories: 95 },
    {id:2, Name: "banana", calories: 105 },
    {id:3, Name: "cherry", calories: 50 },
    {id:4, Name: "date", calories: 60 },
  {id:6, Name: "elderberry", calories: 30 },
  {id:7, Name: "fig", calories: 74 },
  {id:8, Name: "grape", calories: 67 },
 
];
const Vegitable = [
  {id:9, Name: "veg1", calories: 57 },
  {id:10, Name: "veg2", calories: 97 },
  {id:11, Name: "veg3", calories: 88 },
  {id:12, Name: "veg4", calories: 85 },
{id:13, Name: "veg 5", calories: 30 },
{id:14, Name: "lady finger", calories: 74 },
{id:15, Name: "grass", calories: 67 },

];


  return (
    <>
  <Header/>
  <Follow/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Student name="Rahul" age={20}role="React-developer"  isStudent={true}/>
  <Student name="Mahesh" age="30"role="Angular-developer"  isStudent={true}/>
  <Student  age="30"  isStudent={true}/>
  <Student />
  <UserGreet  isLoggedIn={true} time="Good Morning" user="Rahul" greet="you Are welcome"/>
 {fruits.length>0?<List items={fruits} category="fruits" />:null}
 {Vegitable.length>0&& <List items={Vegitable} category="Vegitable" />}
 <MyComp/>
 <OnChange/>
 <ColorPicker/>
 <CarObj/>
 <Meal/>

  <Food/> 
  <Button/>
  <Footer/>
  <CompRev/>
  <Checkbox/>
  <LearnUs/>
  <FindSize/>
    </>
  )
}

export default App
