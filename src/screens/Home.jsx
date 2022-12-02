import React from 'react'
import HomeHero from '../containers/HomeHero'
import TopCreators from '../containers/TopCreators'
import TrendingCollection from '../containers/TrendingCollection'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <TrendingCollection/>
      <TopCreators/>
    </div>
  )
}

export default Home