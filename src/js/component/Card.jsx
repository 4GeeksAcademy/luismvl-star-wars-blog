import React from 'react'
import styles from '../../styles/Card.module.css'

const Card = ({ name, uid, type }) => {
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
      <div className={styles.buttons}>
        <button className={styles.detailsBtn}>Learn more!</button>
        <button className={styles.favBtn}>
          <i className='far fa-heart'></i>
        </button>
      </div>
    </div>
  )
}
export default Card
