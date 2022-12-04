import React from 'react'

const PrimaryButton = ({ text, icon, additionalStyle }) => {
    return (
        <button className={`flex justify-center items-center px-4 py-4 rounded-2xl w-full bg-purple-500 ${additionalStyle} `} >
            {icon&&<img src={icon} alt="btn_icon" />}
            <span className='mx-2' >{text}</span>
        </button>
    )
}

export default PrimaryButton