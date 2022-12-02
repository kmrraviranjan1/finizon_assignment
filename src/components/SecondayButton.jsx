import React from 'react'

const SecondayButton = ({ text, icon, additionalStyle }) => {
    return (
        <button className={`flex justify-center items-center px-4 py-4 rounded-2xl w-full border-blue-600 border-2 outline-2 ${additionalStyle} `} >
            <img src={icon} className="to-blue-600" alt="btn_icon" />
            <span className='mx-2' >{text} Button</span>
        </button>
    )
}

export default SecondayButton