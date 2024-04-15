import React from 'react'
import {SparklesPreview} from './components/Hero'
import Navbar from './components/Navbar'
import {ParallaxScrollDemo} from './components/LayoutGrid'
import Team from './components/Team'

const Page = () => {
  return (
    <div className='bg-[#030303] flex flex-col item-center justify-center m-0 p-0'>
        {/* <FloatingNavDemo></FloatingNavDemo> */}
        <div>        <Navbar></Navbar></div>
        <div> <SparklesPreview/></div>
        <div> <Team></Team></div>

        {/*
      
        </SparklesPreview> */}
        {/* */}
        {/* <Sponsors></Sponsors> */}
        {/* <ParallaxScrollDemo></ParallaxScrollDemo> */}

    </div>
  )
}

export default Page