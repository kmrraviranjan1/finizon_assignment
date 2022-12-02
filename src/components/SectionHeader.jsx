import React from 'react'

const SectionHeader = ({title,subTitle}) => {
  return (
    <div>
        <div className="py-2">
            <div className="">
                <h3 className="text-2xl">{title}</h3>
                <p className="py-2">{subTitle}</p>
            </div>
            <div className="">
            </div>
        </div>
    </div>
  )
}

export default SectionHeader