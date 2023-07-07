import React, { useContext } from 'react'
import { Context } from '../store/appContext.js'

import styles from '../../styles/Card.module.css'

const Card = ({ name, uid, type }) => {
  const { store } = useContext(Context)

  return (
    <div className={styles.container}>
      <img
        src={`https://starwars-visualguide.com/assets/img/${type}s/${uid}.jpg`}
        onError={(e) =>
          (e.target.src =
            'https://starwars-visualguide.com/assets/img/big-placeholder.jpg')
        }
        alt={`Image of ${name}`}
      />
      <h3>{name}</h3>
      <div className={styles.cardFooter}>
        <button>Learn more!</button>
        <div className={styles.buttons}>
          <button className={styles.favBtn}>
            {store.favorites[`${type}sUID`].includes(uid) ? (
              <i
                className='fas fa-heart'
                style={{ color: 'rgb(200 25 25)' }}
              ></i>
            ) : (
              <i className='far fa-heart'></i>
            )}
          </button>
          <button>
            {store.readLater[`${type}sUID`].includes(uid) ? (
              <i class='fas fa-bookmark' style={{ color: '#ffc500' }}></i>
            ) : (
              <i class='far fa-bookmark'></i>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
export default Card
