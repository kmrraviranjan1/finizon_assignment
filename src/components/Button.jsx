import React from 'react'

const Button = ({text,icon,additionalStyle}) => {
  return (
    <button className={`flex justify-center items-center px-4 py-2 rounded-2xl w-full ${additionalStyle} `} >
        <img src={icon} alt="btn_icon" />
        <span  className='mx-2' >{text}</span>
        </button>
  )
}

export default Button