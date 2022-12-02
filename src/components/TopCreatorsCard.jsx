import React from 'react'

const TopCreatorsCard = ({ creator }) => {
    const { name, imageUrl, sales, rank } = creator
    return (
        <div className="bg-[#3B3B3B] rounded-2xl relative">
            <p className="absolute top-3 left-1 rounded-full bg-black w-8 h-8 p-1 text-center">
    
                {rank}</p>
            <div className="flex p-4 items-center">
                <div className="w-10">
                    <img src={imageUrl} alt="avatar" />
                </div>
                <div className="px-2">
                    <p>{name}</p>
                    <p>Total Sales: <span>{sales}</span></p>
                </div>
            </div>
        </div>
    )
}

export default TopCreatorsCard