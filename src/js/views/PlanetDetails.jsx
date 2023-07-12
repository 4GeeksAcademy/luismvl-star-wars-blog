import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../store/appContext.js'

import styles from '../../styles/Details.module.css'

import DetailsRow from '../component/DetailsRow.jsx'
import addThousandSeparator from '../utils/addThousandSeparator.js'
import Buttons from '../component/Buttons.jsx'
import Loader from '../component/Loader.jsx'

const Details = () => {
  const [planet, setPlanet] = useState(null)
  const { actions } = useContext(Context)
  const { uid } = useParams()

  useEffect(() => {
    actions.loadDetails({ uid, type: 'planet' }).then((el) => {
      setPlanet(el)
    })
  }, [])

  if (!planet) return <Loader />

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img
          src={`https://starwars-visualguide.com/assets/img/planetss/${uid}.jpg`}
          onError={(e) =>
            (e.target.src =
              'https://starwars-visualguide.com/assets/img/big-placeholder.jpg')
          }
          alt={`Image of ${planet.name || 'Something from Star Wars'}`}
        />
        <Buttons type='planet' uid={uid} big />
      </div>
      <div className={styles.rightContainer}>
        <h1>{planet.name}</h1>

        <div className={styles.details}>
          <DetailsRow
            label='Population'
            value={addThousandSeparator(planet.population)}
          />
          <DetailsRow label='Diameter' value={planet.diameter + ' km'} />
          <DetailsRow
            label='Rotation Period'
            value={planet.rotation_period + '  days'}
          />
          <DetailsRow
            label='Orbital Period'
            value={planet.orbital_period + ' days'}
          />
          <DetailsRow label='Gravity' value={planet.gravity} />
          <DetailsRow label='Terrain' value={planet.terrain} />
          <DetailsRow
            label='Surface Water'
            value={planet.surface_water + '%'}
          />
          <DetailsRow label='Climate' value={planet.climate} />
        </div>
      </div>
    </div>
  )
}

export default Details
