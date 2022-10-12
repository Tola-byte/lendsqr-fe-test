import React from 'react'
import { cards } from '../../utils/data'
import styles from './MainDashboard.module.scss'
const MainDashboard = () => {
  return (
    <div className={styles.dashboard}>

 <div className={styles.parent}>
    
    {cards.map((data,id) => {
        
        return(
        <div className={styles.cards} key = {id}>
        <img src={data.img} alt="" />
        <div className={styles.title}>{data.title}</div>
        <p className={styles.value}>{data.value}</p>
     </div>
    )})}

    

    </div>
   
    </div>
  )
}

export default MainDashboard