import React from 'react'
import styles from './Popup.module.scss'
const Popup = () => {
  return (
    <div className={styles.card}>
        <div className={styles.popup}>
            <img src="./src/assets/eyes.png" alt="eyes" />
            <span className={styles.data}>View details</span>
        </div>

        <div className={styles.popup}>
            <img src="./src/assets/blacklistuser.png" alt="eyes" />
            <span className={styles.data}>Blacklist User</span>
        </div>

        <div className={styles.popup}>
            <img src="./src/assets/activateuser.png" alt="eyes" />
            <span className={styles.data}>Activate User</span>
        </div>
    </div>
  )
}

export default Popup