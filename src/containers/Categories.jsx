import React from 'react'
import CategoriesCard from '../components/CategoriesCard'
import SectionHeader from '../components/SectionHeader'
import { data } from '../constants'

const Categories = () => {
  return (
    <div className="bg-black text-white px-6 py-4">
        <SectionHeader title="Browse Categories"/>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {
                data.categories.map(({title,position})=>(<CategoriesCard key={position} title={title}/>))
            }
        </div>
        <CategoriesCard/>
    </div>
  )
}

export default Categories