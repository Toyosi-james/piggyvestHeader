import React from 'react'

const Button = (props) => {

    
  return (
    
    <div>
      <button style={{backgroundColor:props.bgColor, border:props.border,color:props.textColor,padding:props.pad,display:props.display,alignItems:props.align,gap:props.gap,flexDirection:props.flex}} className='px-5 py-3 rounded-xl font-medium'>{props.name}{props.iconTitle} </button>
    </div>
  )
}

export default Button
