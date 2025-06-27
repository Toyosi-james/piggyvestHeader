import React from 'react'

const Button = (props) => {

    
  return (
    
    <div>
      <button style={{backgroundColor:props.bgColor, border:props.border,color:props.textColor}} className='px-5 py-3 rounded-xl font-medium'>{props.name} </button>
    </div>
  )
}

export default Button
