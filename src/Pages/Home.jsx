import React from 'react'
import HomePage from '../Component/HomePage'
import NetworkStructureDesign from '../Component/NetworkStructureDesign'
import NetworkDesign from '../Component/NetworkDesign'
import PartnersSection from '../Component/PartnerSection'
import FeatureSection from '../Component/FeatureSection'
import OurVision from './../Component/OurVision'
// import JoinNewsletter from '../Component/JoinNewsletter'
// import JoinNewsletter2 from '../Component/JoinNewsletter2'

const Home = () => {
  return (
    <>
    <HomePage  Name={"Krishna"} />
    <NetworkStructureDesign/>
    {/* <JoinNewsletter/> */}
    <NetworkDesign/>
    <OurVision/>
    <FeatureSection/>
    <PartnersSection/>
    </>
  )
}

export default Home