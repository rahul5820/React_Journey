
import PropsTypes from 'prop-types'
function Student(data) {
  return (
    <div className="student">
      <h2>Name:{data.name}</h2>
      <p>Age:{data.age}</p>
      <p>Role:{data.role}</p>
      <p>isStudent:{data.isStudent?"YES":"NO"} </p>
    </div>
  )
}
Student.propsTypes={
    name:PropsTypes.string,
    age:PropsTypes.number,
    role:PropsTypes.string,
    isStudent:PropsTypes.bool
}
Student.defaultProps={
    name:"guest",
    age:20,
    role:"Student",
    isStudent:true
}
export default Student
