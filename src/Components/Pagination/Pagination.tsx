import React from 'react'
import styles from "./Pagination.module.scss"
const Pagination = () => {
  return (
    <div className={styles.pagination}>
    <p className={styles.showing}>Showing
        <span> <input className={styles.input} type="number" /></span>out of 100</p>



        <div className={styles.button}>
            <img src="./src/assets/prev-btn.png" alt="prev" />
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
            <p>16</p>
            <img src="./src/assets/next-btn.png" alt="next" />
        </div>
</div>
  )
}

export default Pagination