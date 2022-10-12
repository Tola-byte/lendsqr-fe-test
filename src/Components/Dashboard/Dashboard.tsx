import React from 'react'
import MainDashboard from '../MainDashboard/MainDashboard'
import  Nav  from "../Navbar/Navbar"
import Sidebar from '../Sidebar/Sidebar'
import Tables from '../Tables/Tables'
import Pagination from '../Pagination/Pagination'
import styles from '../Users/Users.module.scss'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate();
  const route = ()=> {
    navigate('/users')
  }
  return (
    <div>
        <Nav/>
        <a className={styles.link} onClick={route}>
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