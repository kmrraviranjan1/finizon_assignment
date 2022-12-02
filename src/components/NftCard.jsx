import React from 'react'
import  {images}  from '../constants'

const NftCard = () => {
  return (
    <div className="w-full h-full rounded-2xl">
        <img src={images.homeHero} alt="hero_nft_card"  className="w-full" />

        <div className="rounded-2xl">
            <div className="bg-gray-700 px-4">
                <h5 className="py-2">Space Walking</h5>
                <div className="flex py-2 gap-2">
                    <img src={images.avatar} alt="avatar" className="" />
                    <p>Animakid</p>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    </div>
  )
}

export default NftCard