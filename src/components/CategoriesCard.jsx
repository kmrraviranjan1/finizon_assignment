import React from 'react'
import { images } from '../constants'

const CategoriesCard = ({ title }) => {
    if(!title){
        return(<></>)
    }
    return (
        <div className='w-full rounded-2xl'>
            <div>
                <img src={images.homeCategory} alt="category" className="w-full"/>
            </div>
            <p className='bg-[#3B3B3B] py-4 px-2 rounded-b-2xl'> {title} </p>
        </div>
    )
}

export default CategoriesCard