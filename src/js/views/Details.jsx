import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../store/appContext.js'

import styles from '../../styles/Details.module.css'

const Details = () => {
  const [character, setChatacter] = useState(null)
  const { actions } = useContext(Context)
  const location = useLocation()

  const nameFromLocation = location.state.name
  const uidFromLocation = location.state.uid

  useEffect(() => {
    actions
      .loadDetails({ id: uidFromLocation, type: 'characters' })
      .then((char) => {
        setChatacter(char)
      })
  }, [])
  return (
    <div className={styles.container}>
      <h1>{character ? character.name : nameFromLocation}</h1>
      <p>
        Birth Day: <span>{character?.birth_year}</span>
      </p>
      {character?.species && (
        <p>
          Species: <span>{character.species}</span>
        </p>
      )}
      <p>
        Height: <span>{character?.height}</span>
      </p>
      <p>
        Mass: <span>{character?.mass}</span>
      </p>
      <p>
        Gender: <span>{character?.gender}</span>
      </p>
      <p>
        Hair Color: <span>{character?.hair_color}</span>
      </p>
      <p>
        Skin Color: <span>{character?.skin_color}</span>
      </p>
      <p>
        Homeworld: <span>{character?.homeworld}</span>
      </p>
    </div>
  )
}

export default Details
