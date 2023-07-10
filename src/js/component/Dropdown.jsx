import React, { useContext, useState } from 'react'
import styles from '../../styles/Dropdown.module.css'
import { Context } from '../store/appContext.js'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { store } = useContext(Context)

  const favCharacters = store.favoritesUIDs.characters.map((uid) =>
    store.characters.find((c) => c.uid === uid)
  )
  const favPlanets = store.favoritesUIDs.planets.map((uid) =>
    store.planets.find((p) => p.uid === uid)
  )
  const favVehicles = store.favoritesUIDs.vehicles.map((uid) =>
    store.vehicles.find((v) => v.uid === uid)
  )
  const count = favCharacters.length + favPlanets.length + favVehicles.length

  const toggleDropdown = () => {
    if (count > 0) setIsOpen(!isOpen)
  }

  return (
    <button id='dropdown' className={styles.dropdown} onClick={toggleDropdown}>
      <span>Favorites</span>
      <span className={styles.count}>{count}</span>
      {count > 0 &&
        (isOpen ? (
          <i className='fas fa-angle-up'></i>
        ) : (
          <i className='fas fa-angle-down'></i>
        ))}
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {favCharacters.length > 0 && (
            <li className={styles.menuTitle}>Characters</li>
          )}
          {favCharacters.map((c) => (
            <li key={c.uid}>
              {c.name}
              <i className='fas fa-trash'></i>
            </li>
          ))}

          {favPlanets.length > 0 && (
            <li className={styles.menuTitle}>Planets</li>
          )}
          {favPlanets.map((p) => (
            <li key={p.uid}>
              {p.name}
              <i className='fas fa-trash'></i>
            </li>
          ))}
          {favVehicles.length > 0 && (
            <li className={styles.menuTitle}>Vehicles</li>
          )}
          {favVehicles.map((v) => (
            <li key={v.uid}>
              {v.name}
              <i className='fas fa-trash'></i>
            </li>
          ))}
        </ul>
      )}
    </button>
  )
}

export default Dropdown
