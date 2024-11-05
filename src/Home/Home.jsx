import { useState } from 'react'
import './Home.css'

import Header from '../components/Header/Header.jsx'
import AnimatedLogo from '../components/HomeLogo/AnimatedLogo.jsx'
import PhotoVideo from '../components/PhotoVideo/PhotoVideo.jsx'

function Home() {

  return (
    <>
      <Header/>
      <AnimatedLogo/>
      <PhotoVideo/>
    </>
  )
}

export default Home
