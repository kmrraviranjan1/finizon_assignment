import React from 'react'
import Categories from '../containers/Categories'
import HomeHero from '../containers/HomeHero'
import TopCreators from '../containers/TopCreators'
import TrendingCollection from '../containers/TrendingCollection'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <TrendingCollection/>
      <TopCreators/>
      <Categories/>
    </div>
  )
}

export default Home