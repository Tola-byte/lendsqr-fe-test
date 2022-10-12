import React from 'react'
import MainDashboard from '../MainDashboard/MainDashboard'
import  Nav  from "../Navbar/Navbar"
import Sidebar from '../Sidebar/Sidebar'
import Tables from '../Tables/Tables'
import Pagination from '../Pagination/Pagination'
import Filter from '../Filter/Filter'
import Popup from '../Popup/Popup'
import styles from './Users.module.scss'
import { useNavigate } from 'react-router-dom'
const Users = () => {
  const navigate = useNavigate();
  const routenext = () =>{
    navigate('/userdetails')
  } 
  const routeback = () => {
    navigate('/dashboard')
  }
  return (
    <div>
         <Nav/>
         <div>
         <a onClick={routenext}>
          
        <div className={styles.contain}>
        <p className={styles.text}>Next</p>
            <img src="/assets/arrow.png" className={styles.next} alt="" />
            </div>
        </a>
        <a onClick={routeback}>
            <img src="/assets/arrow.png" className={styles.back} alt="" />
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