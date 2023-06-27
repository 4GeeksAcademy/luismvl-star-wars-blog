import React from 'react'
import styles from '../../styles/Navbar.module.css'

import Logo from './Logo.jsx'
import Dropdown from './Dropdown.jsx'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Dropdown />
    </div>
  )
}
export default Navbar
