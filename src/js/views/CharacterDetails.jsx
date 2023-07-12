import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../store/appContext.js'
import capitalize from '../utils/capitalize.js'

import styles from '../../styles/Details.module.css'

import DetailsRow from '../component/DetailsRow.jsx'
import Buttons from '../component/Buttons.jsx'
import Loader from '../component/Loader.jsx'

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null)
  const { actions } = useContext(Context)
  const { uid } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    actions.loadDetails({ uid, type: 'character' }).then((el) => {
      setCharacter(el)
    })
  }, [])

  if (!character) return <Loader />

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
          onError={(e) =>
            (e.target.src =
              'https://starwars-visualguide.com/assets/img/big-placeholder.jpg')
          }
          alt={`Image of ${character.name || 'Something from Star Wars'}`}
        />
        <Buttons type='character' uid={uid} big />
      </div>
      <div className={styles.rightContainer}>
        <h1>{character.name}</h1>

        <div className={styles.details}>
          <DetailsRow label='Birth Year' value={character.birth_year} />
          <DetailsRow label='Height' value={character.height + ' cm'} />
          <DetailsRow label='Mass' value={character.mass + ' kg'} />
          <DetailsRow label='Gender' value={capitalize(character.gender)} />
          <DetailsRow
            label='Hair Color'
            value={capitalize(character.hair_color)}
          />
          <DetailsRow
            label='Skin Color'
            value={capitalize(character.skin_color)}
          />
        </div>
        <div className={styles.homeworld}>
          <div className={styles.homeworldHeader}>
            <DetailsRow label='Homeworld' value={character.homeworld.name} />
            <button
              onClick={() => navigate(`/planet/${character.homeworld.uid}`)}
            >
              <i className='fas fa-info-circle'></i>
            </button>
          </div>
          <div className={styles.divider}></div>
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${character.homeworld.uid}.jpg`}
            onError={(e) =>
              (e.target.src =
                'https://starwars-visualguide.com/assets/img/big-placeholder.jpg')
            }
            alt={`Image of ${character.name}`}
          />
        </div>
      </div>
    </div>
  )
}

export default CharacterDetails
