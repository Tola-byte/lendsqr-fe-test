import React from 'react'
import MainDashboard from '../MainDashboard/MainDashboard'
import  Nav  from "../Navbar/Navbar"
import Sidebar from '../Sidebar/Sidebar'
import Tables from '../Tables/Tables'
import Pagination from '../Pagination/Pagination'
import Filter from '../Filter/Filter'
import Popup from '../Popup/Popup'
import styles from './Users.module.scss'
const Users = () => {
  return (
    <div>
         <Nav/>
         <div>
         <a href="/userdetails">
          
        <div className={styles.contain}>
        <p className={styles.text}>Next</p>
            <img src="./src/assets/arrow.png" className={styles.next} alt="" />
            </div>
        </a>
        <a href="/dashboard">
            <img src="./src/assets/arrow.png" className={styles.back} alt="" />
            <p className={styles.textback}>Back</p>
            </a>
            </div>
       
        <Sidebar/>
        <MainDashboard/>
        <Tables/>
        <Filter/>
        <Pagination/>
        <Popup/>
    </div>
  )
}

export default Users