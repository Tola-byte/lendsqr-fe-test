import React from 'react'
import styles from './Filter.module.scss'
const Filter = () => {
  return (
    <div>
        <form action="" className={styles.form}>
            <div className={styles.parent}>
            <div className={styles.fields}>
            <label htmlFor="Organization">Organization</label>
            <select className={styles.input} name="" id="">
                <option value="">Select</option>
                <option value="">Mikano Limited</option>
            </select>
            </div>

            <div className={styles.fields}>
            <label htmlFor="Organization">Username</label>
            <input type="text" placeholder='User' className={styles.input} />
            </div>

            <div className={styles.fields}>
            <label htmlFor="Organization">Email</label>
            <input type="email" placeholder='Email' className={styles.input}  />
            </div>

            <div className={styles.fields}>
            <label htmlFor="Organization">Date</label>
            <div className={styles.calendarinput}>
            <input type="date" placeholder='Date' className={styles.input}  />
            <img src="/assets/calendar.png" className = {styles.calendar} alt="calendar" />
            </div>
            </div>

            <div className={styles.fields}>
            <label htmlFor="Organization">Phone Number</label>
            <input type="telephone" placeholder='Phone Number' className={styles.input} />
            </div>

            <div className={styles.fields}>
            <label htmlFor="Organization">Status</label>
            <select className={styles.input} name="" id="">
            <option value="">Select</option>
                <option value="">Active</option>
            </select>
            </div>

            <div className={styles.setButton} >
                <button className={styles.reset}><p>Reset</p></button>
                <button className={styles.filter}><p>Filter</p></button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Filter