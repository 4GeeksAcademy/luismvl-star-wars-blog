import React, { useContext } from 'react'
import styles from '../../styles/Home.module.css'
import { Context } from '../store/appContext.js'

import Card from '../component/Card.jsx'

const Home = () => {
  const { store } = useContext(Context)
  return (
    <div className={styles.container}>
      <h2>Characters</h2>
      <div className={styles.grid}>
        {store.characters.map((c) => (
          <Card key={c.uid} name={c.name} uid={c.uid} type='character' />
        ))}
      </div>

      <h2>Planets</h2>
      <div className={styles.grid}>
        {store.planets.map((p) => (
          <Card key={p.uid} name={p.name} uid={p.uid} type='planet' />
        ))}
      </div>

      <h2>Vehicles</h2>
      <div className={styles.grid}>
        {store.vehicles.map((v) => (
          <Card key={v.uid} name={v.name} uid={v.uid} type='vehicle' />
        ))}
      </div>
    </div>
  )
}
export default Home
