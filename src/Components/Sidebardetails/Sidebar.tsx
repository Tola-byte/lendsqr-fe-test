import React from 'react'
import styles from "./Sidebar.module.scss"
import {data} from "../../utils/data"
import { types } from 'sass'


const Sidebar = () => {
    console.log(data[0].img)
  return (
    <div className={styles.sidebar}>

    <div className={styles.contents}>
        <img src="/assets/briefcase.png" alt="home" />
        <p className={styles.texts}>Switch Organization</p>
        <img className={styles.arrow} src="/assets/arrowdown.png" alt="dropdown" />
       
    </div>

    <div className={styles.contents}>
    <img src="/assets/home.png" alt="home" />
        <p className={styles.texts}>Dashboard</p>
    </div>
    <p className={styles.customers}>CUSTOMERS</p>
    <div className={styles.contents}>
             <img src={data[0].img} alt="home" />
        <p className={styles.texts}>{data[0].text}</p>
         </div>

         <div className={styles.contents}>
             <img src={data[1].img} alt="home" />
        <p className={styles.texts}>{data[1].text}</p>
         </div>

         <div className={styles.contents}>
             <img src={data[2].img} alt="home" />
       <p className={styles.text}>{data[2].text}</p>
         </div>

         <div className={styles.contents}>
             <img src={data[3].img} alt="home" />
        <p className={styles.texs}>{data[3].text}</p>
         </div>

         <div className={styles.contents}>
             <img src={data[4].img} alt="home" />
        <p className={styles.tet}>{data[4].text}</p>
         </div>

         <div className={styles.contents}>
             <img src={data[5].img} alt="home" />
        <p className={styles.tex}>{data[5].text}</p>
         </div>
       
         <div className={styles.contents}>
             <img src={data[6].img} alt="home" />
        <p className={styles.texts}>{data[6].text}</p>
         </div>

         <div className={styles.contents}>
             <img src={data[7].img} alt="home" />
        <p className={styles.texts}>{data[7].text}</p>
         </div>
    <p className={styles.customers}>BUSINESSES</p>
    <div className={styles.contents}>
        <img src="/assets/briefcase.png" alt="home" />
        <p className={styles.texts}>Organization</p>
    </div>
    <div className={styles.contents}>
     <img src={data[11].img} alt="home" />
        <p className={styles.text}>{data[11].text}</p>
         </div>

         <div className={styles.contents}>
     <img src={data[12].img} alt="home" />
        <p className={styles.texts}>{data[12].text}</p>
         </div>

         <div className={styles.contents}>
     <img src={data[13].img} alt="home" />
        <p className={styles.tet}>{data[13].text}</p>
         </div>

         <div className={styles.contents}>
     <img src={data[14].img} alt="home" />
        <p className={styles.tet}>{data[14].text}</p>
         </div>

         <div className={styles.contents}>
     <img src={data[15].img} alt="home" />
        <p className={styles.tet}>{data[15].text}</p>
         </div>

         <div className={styles.contents}>
     <img src={data[16].img} alt="home" />
        <p className={styles.texs}>{data[16].text}</p>
         </div>

         <div className={styles.contents}>
     <img src={data[17].img} alt="home" />
        <p className={styles.texs}>{data[17].text}</p>
         </div>

         <div className={styles.contents}>
     <img src={data[18].img} alt="home" />
        <p className={styles.tet}>{data[18].text}</p>
         </div>
    
    <p className={styles.customers}>SETTINGS</p>
    <div className={styles.contents}>
     <img src={data[8].img} alt="home" />
        <p className={styles.texts}>{data[8].text}</p>
         </div>


         <div className={styles.contents}>
     <img src={data[9].img} alt="home" />
        <p className={styles.texts}>{data[9].text}</p>
         </div>

         <div className={styles.contents}>
     <img src={data[10].img} alt="home" />
        <p className={styles.text}>{data[10].text}</p>
         </div>
    
    </div>
   
   
  )
}

export default Sidebar