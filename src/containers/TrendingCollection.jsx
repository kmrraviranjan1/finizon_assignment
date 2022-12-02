import React from 'react'
import CollectionCard from '../components/CollectionCard'
import SectionHeader from '../components/SectionHeader'

const TrendingCollection = () => {
    return (
        <div className="bg-black w-full">
            <div className="w-full px-6 py-4 text-white">
                <SectionHeader title="Trending Collection" subTitle="Checkout our weekly updated trending collection." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                    [1, 2, 3].map((index) => <CollectionCard key={index} />)
                    }
                </div>

            </div>

        </div>
    )
}

export default TrendingCollection