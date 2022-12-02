import React from 'react'
import SecondayButton from '../components/SecondayButton'
import SectionHeader from '../components/SectionHeader'
import TopCreatorsCard from '../components/TopCreatorsCard'
import { data } from '../constants'
import { icons } from '../constants'

const TopCreators = () => {
  return (
    <div className="bg-black w-full">
      <div className="text-white px-6 py-4">
        <SectionHeader title="Top Creators" subTitle="Checkout Top Rated Creators On The NFT MarketPlace" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            data.topCreators.map((creator) => (<TopCreatorsCard key={creator.rank} creator={creator} />))
          }
        </div>
        <div className="py-4 md:hidden">
          <SecondayButton text="View Rankings" icon={icons.RocketLaunch} />
        </div>
      </div>
    </div>
  )
}

export default TopCreators