import React from 'react'
import MainDashboard from '../MainDashboard/MainDashboard'
import  Nav  from "../Navbar/Navbar"
import Sidebar from '../Sidebar/Sidebar'
import Tables from '../Tables/Tables'
import Pagination from '../Pagination/Pagination'
import styles from '../Users/Users.module.scss'
const Dashboard = () => {
  return (
    <div>
        <Nav/>
        <a href="/users">
        <div className={styles.contain}>
        <p className={styles.text}>Next</p>
            <img src="/assets/arrow.png"  className = {styles.next} alt="" />
         
        </div>
        </a>
        <Sidebar/>
        <MainDashboard/>
        <Tables/>
        <Pagination/>

    </div>
  )
}

export default Dashboard