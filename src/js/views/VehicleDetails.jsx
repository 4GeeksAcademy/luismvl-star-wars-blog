import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../store/appContext.js'

import styles from '../../styles/Details.module.css'

import DetailsRow from '../component/DetailsRow.jsx'
import addThousandSeparator from '../utils/addThousandSeparator.js'
import capitalize from '../utils/capitalize.js'
import Buttons from '../component/Buttons.jsx'
import Loader from '../component/Loader.jsx'

const Details = () => {
  const [vehicle, setVehicle] = useState(null)
  const { actions } = useContext(Context)
  const { uid } = useParams()

  useEffect(() => {
    actions.loadDetails({ uid, type: 'vehicle' }).then((el) => {
      setVehicle(el)
    })
  }, [])

  if (!vehicle) return <Loader />

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
          onError={(e) =>
            (e.target.src =
              'https://starwars-visualguide.com/assets/img/big-placeholder.jpg')
          }
          alt={`Image of ${vehicle.name || 'Something from Star Wars'}`}
        />
        <Buttons type='vehicle' uid={uid} big />
      </div>
      <div className={styles.rightContainer}>
        <h1>{vehicle.name}</h1>

        <div className={styles.details}>
          <DetailsRow label='Model' value={vehicle.model} />
          <DetailsRow label='Manufacturer' value={vehicle.manufacturer} />
          <DetailsRow label='Class' value={capitalize(vehicle.vehicle_class)} />
          <DetailsRow
            label='Cost'
            value={addThousandSeparator(vehicle.cost_in_credits) + ' credits'}
          />
          <DetailsRow
            label='Speed'
            value={vehicle.max_atmosphering_speed + ' km/h'}
          />
          <DetailsRow label='Length' value={vehicle.length + ' m'} />
          <DetailsRow
            label='Cargo Capacity'
            value={Number(vehicle.cargo_capacity) / 1000 + ' metric tons'}
          />
          <DetailsRow label='Minimum Crew' value={vehicle.crew} />
          <DetailsRow label='Passengers' value={vehicle.passengers} />
        </div>
      </div>
    </div>
  )
}

export default Details
