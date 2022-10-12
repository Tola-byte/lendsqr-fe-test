//import { data } from '@utils/data'
import React, { useEffect , useState} from 'react'
import styles from "./Navbar.module.scss"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const routehome = () => {
        navigate('/')
    }
    // const [user, setUser] = useState[()=>{
    //     return JSON.parse(window.localStorage.getItem('MY_USERS_DETAILS'))
       
    // }]
    // useEffect(()=>{
    //     const user =  window.localStorage.getItem('MY_USERS_DETAILS');
    //     if ( user !== null ) setUser(JSON.parse(user));
    //    console.log(user)
    // }, [])
  return (
        <div className={styles.navcontainer}>
            <div className={styles.contain}>
                <a onClick = {routehome}>
                <img className = {styles.logo} src="/assets/Group.png" alt="lendsqr" />
                </a>
       

        <div className={styles.searchbox}>
            <input className = {styles.input} type="text"placeholder='Search for anything' />
            <div className={styles.show}><img src="/assets/search.png" alt="search" /></div>
        </div>
        </div>


        <div className={styles.navicons}>
            <a href="">Docs</a>
            <img src="/assets/bell.png" alt="notif" />
            <img className = {styles.avatar} src="/assets/avatar.png" alt="human" />
            <p className={styles.name}>Aletha</p>
            <img className={styles.dropdown} src="/assets/dropdown.png" alt="dropdown" />
        </div>
        </div>

  )
}

export default Navbar