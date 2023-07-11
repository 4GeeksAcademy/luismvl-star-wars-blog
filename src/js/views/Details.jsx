import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../store/appContext.js'

import styles from '../../styles/Details.module.css'

import DetailsRow from '../component/DetailsRow.jsx'
import addThousandSeparator from '../utils/addThousandSeparator.js'

const Details = ({ type }) => {
  const [element, setElement] = useState(null)
  const { actions } = useContext(Context)
  const { uid } = useParams()

  useEffect(() => {
    actions.loadDetails({ uid, type }).then((el) => {
      setElement(el)
    })
  }, [])

  if (!element) return <h1>Loading...</h1>

  return (
    <div className={styles.container}>
      <h1>{element.name}</h1>
      <img
        src={`https://starwars-visualguide.com/assets/img/${type}s/${uid}.jpg`}
        onError={(e) =>
          (e.target.src =
            'https://starwars-visualguide.com/assets/img/big-placeholder.jpg')
        }
        alt={`Image of ${element.name || 'something from Star Wars'}`}
      />
      <div className={styles.details}>
        {type === 'character' && (
          <>
            <DetailsRow label='Birth Year' value={element.birth_year} />
            <DetailsRow label='Height' value={element.height + ' cm'} />
            <DetailsRow label='Mass' value={element.mass + ' kg'} />
            <DetailsRow label='Gender' value={element.gender} />
            <DetailsRow label='Hair Color' value={element.hair_color} />
            <DetailsRow label='Skin Color' value={element.skin_color} />
          </>
        )}
        {type === 'planet' && (
          <>
            <DetailsRow
              label='Population'
              value={addThousandSeparator(element.population)}
            />
            <DetailsRow label='Diameter' value={element.diameter + ' km'} />
            <DetailsRow
              label='Rotation Period'
              value={element.rotation_period + '  days'}
            />
            <DetailsRow
              label='Orbital Period'
              value={element.orbital_period + ' days'}
            />
            <DetailsRow label='Gravity' value={element.gravity} />
            <DetailsRow label='Terrain' value={element.terrain} />
            <DetailsRow
              label='Surface Water'
              value={element.surface_water + '%'}
            />
            <DetailsRow label='Climate' value={element.climate} />
          </>
        )}
        {type === 'vehicle' && (
          <>
            <DetailsRow label='Model' value={element.model} />
            <DetailsRow label='Manufacturer' value={element.manufacturer} />
            <DetailsRow label='Class' value={element.vehicle_class} />
            <DetailsRow
              label='Cost'
              value={addThousandSeparator(element.cost_in_credits) + ' credits'}
            />
            <DetailsRow
              label='Speed'
              value={element.max_atmosphering_speed + ' km/h'}
            />
            <DetailsRow label='Length' value={element.length + ' m'} />
            <DetailsRow
              label='Cargo Capacity'
              value={Number(element.cargo_capacity) / 1000 + ' metric tons'}
            />
            <DetailsRow label='Minimum Crew' value={element.crew} />
            <DetailsRow label='Passengers' value={element.passengers} />
          </>
        )}
      </div>
    </div>
  )
}

export default Details
