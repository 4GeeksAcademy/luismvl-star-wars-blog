import React from 'react'

import styles from '../../styles/Home.module.css'

import Grid from '../component/Grid.jsx'

const Home = () => {
  return (
    <div className={styles.container}>
      <Grid type='character' />
      <Grid type='planet' />
      <Grid type='vehicle' />
    </div>
  )
}
export default Home
