import React, { useContext, useState } from 'react'
import styles from '../../styles/Dropdown.module.css'
import { Context } from '../store/appContext.js'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(true)
  const { store } = useContext(Context)

  const favCharacters = store.favorites.charactersUID.map((uid) =>
    store.characters.find((c) => c.uid === uid)
  )
  const favPlanets = store.favorites.planetsUID.map((uid) =>
    store.planets.find((p) => p.uid === uid)
  )
  const favVehicles = store.favorites.vehiclesUID.map((uid) =>
    store.vehicles.find((v) => v.uid === uid)
  )
  const count = favVehicles.length + favPlanets.length + favVehicles.length

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      <span>Favorites</span>
      <span className={styles.count}>{count}</span>
      {isOpen ? (
        <i className='fas fa-angle-up'></i>
      ) : (
        <i className='fas fa-angle-down'></i>
      )}
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.menuTitle}>Characters</li>
          {favCharacters.map((c) => (
            <li>
              {c.name}
              <i className='fas fa-trash'></i>
            </li>
          ))}
          <li className={styles.menuTitle}>Planets</li>
          {favPlanets.map((p) => (
            <li>
              {p.name}
              <i className='fas fa-trash'></i>
            </li>
          ))}
          <li className={styles.menuTitle}>Vehicles</li>
          {favVehicles.map((p) => (
            <li>
              {p.name}
              <i className='fas fa-trash'></i>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
