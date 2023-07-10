import React, { useContext } from 'react'
import { Context } from '../store/appContext.js'

import styles from '../../styles/Home.module.css'

import Card from '../component/Card.jsx'

const Home = () => {
  const { store, actions } = useContext(Context)
  return (
    <div className={styles.container}>
      <h2>Characters</h2>
      <div className={styles.grid}>
        {store.characters.map((c) => (
          <Card key={c.uid} name={c.name} uid={c.uid} type='character' />
        ))}
        {store.nextCharacters && (
          <button
            className={styles.nextPageBtn}
            onClick={() => actions.loadNextPage('characters')}
          >
            Load more
            <i className='fas fa-caret-right'></i>
          </button>
        )}
      </div>

      <h2>Planets</h2>
      <div className={styles.grid}>
        {store.planets.map((p) => (
          <Card key={p.uid} name={p.name} uid={p.uid} type='planet' />
        ))}
        {store.nextPlanets && (
          <button
            className={styles.nextPageBtn}
            onClick={() => actions.loadNextPage('planets')}
          >
            Load more
            <i className='fas fa-caret-right'></i>
          </button>
        )}
      </div>

      <h2>Vehicles</h2>
      <div className={styles.grid}>
        {store.vehicles.map((v) => (
          <Card key={v.uid} name={v.name} uid={v.uid} type='vehicle' />
        ))}
        {store.nextVehicles && (
          <button
            className={styles.nextPageBtn}
            onClick={() => actions.loadNextPage('vehicles')}
          >
            Load more
            <i className='fas fa-caret-right'></i>
          </button>
        )}
      </div>

      <h2>
        Read Later <i className='fas fa-bookmark'></i>
      </h2>
      <div className={styles.grid}>
        {Array.isArray(store.characters) &&
          store.characters.length > 0 &&
          store.readLater.charactersUID
            .map((uid) => store.characters.find((c) => c.uid === uid))
            .map((c) => (
              <Card key={c.uid} name={c.name} uid={c.uid} type='character' />
            ))}
      </div>
    </div>
  )
}
export default Home
