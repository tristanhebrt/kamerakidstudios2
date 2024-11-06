import { useState } from 'react'
import styles from './Home.module.css'

import Header from '../components/Header/Header.jsx'
import AnimatedLogo from '../components/HomeLogo/AnimatedLogo.jsx'
import PhotoVideo from '../components/PhotoVideo/PhotoVideo.jsx'

function Home() {

  return (
    <div className={styles.homeContainer}>
      <Header/>
      <AnimatedLogo/>
      <PhotoVideo/>
    </div>
  )
}

export default Home
