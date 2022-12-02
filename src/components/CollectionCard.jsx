import React from 'react'
import { images } from '../constants'

const CollectionCard = () => {
    return (
        <div className="w-full ">
            <div className="">
                <div className="">
                    <img src={images.collectionImgPlaceHolder} alt="" className="w-full" />
                </div>
                <div className="grid grid-cols-3 gap-4 py-2 max-w-20">
                    <img src={images.collectionImgPlaceHolder} alt="avatar" className="max-w-20" />
                    <img src={images.collectionImgPlaceHolder} alt="avatar" className="max-w-20" />
                    <img src={images.collectionImgPlaceHolder} alt="avatar" className="max-w-20" />
                </div>
                <div className="">
                    <div className="rounded-2xl">
                        <div className="px-2">
                            <h5 className="py-1">Space Walking</h5>
                            <div className="flex py-1 gap-2">
                                <img src={images.avatar} alt="avatar" className="" />
                                <p>Animakid</p>
                            </div>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard