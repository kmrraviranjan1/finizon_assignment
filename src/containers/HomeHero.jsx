import React from 'react'
import AdditionalInfo from '../components/AdditionalInfo'
import Button from '../components/Button'
import NftCard from '../components/NftCard'
import { icons } from '../constants'

const HomeHero = () => {
    return (
        <div className="w-full bg-black text-white">
            <div className="w-full h-full flex flex-col justify-center px-6 py-4 items-center">
                <div className="flex flex-col justify-evenly items-start">
                    <h1 className="text-3xl">Discover digital art & Collect NFTs</h1>
                    <p className="lin py-2">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                    <div className='hidden lg:block w-full p-2'>
                        <Button icon={icons.RocketLaunch} additionalStyle='bg-purple-500' text="Get Started" />
                    </div>
                    <div className="hidden lg:block">
                        <AdditionalInfo />
                    </div>
                </div>
                <div className="">
                    <NftCard />
                </div>
                <div className='w-full pt-6 pb-4 lg:hidden'>
                        <Button icon={icons.RocketLaunch} additionalStyle='bg-purple-500' text="Get Started" />
                    </div>
                <div className=" w-full pt-2 pb-4 lg:hidden">
                    <AdditionalInfo />
                </div>
            </div>
        </div>
    )
}

export default HomeHero