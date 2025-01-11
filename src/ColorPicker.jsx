import {useState} from 'react'

function ColorPicker() {



const [color, setColor] = useState('red')





  return (

    <div className='color-picker-container'>
      <h1>Color Picker</h1>
      <div className='color-display' style={{backgroundColor:color}}>
      <p style={{TextColor:{color}}}>Selected Clour :{color}</p>
           
      </div>

      <label className='labelSpecial'> Select A colour  </label>
      <input value={color} onChange={(e) => setColor(e.target.value)} type="color"/>


   
    </div>
  )
}

export default ColorPicker
