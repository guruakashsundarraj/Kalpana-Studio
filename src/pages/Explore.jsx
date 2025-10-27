import React from 'react'

import { Helmet } from 'react-helmet'

import Hero from '../components/Hero'
import Features1 from '../components/Feature1'
import CTA from '../components/cta'
import Features2 from '../components/Feature2'
import Steps from '../components/Steps'
import '../pages/Explore.css'
import PricingCard from '../components/PricingCard'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Hero></Hero>
      <Features1></Features1>
      <CTA></CTA>
      <Features2></Features2>
      <PricingCard></PricingCard>
      <Steps></Steps>
    </div>
  )
}

export default Home
